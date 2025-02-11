import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/addProduct/Add.js";
import { GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/apiCalls.js";
import { RootState } from "../../redux/types.js";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 50 },
  {
    field: "image",
    headerName: "Imagem",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || "noavatar.png"}></img>;
    },
  },
  { field: "title", headerName: "Title", width: 200 },
  { field: "price", headerName: "Price (R$)", width: 160 },
  { field: "producer", headerName: "Producer", width: 150 },
  { field: "createdAt", headerName: "createdAt", width: 200 },
  { field: "inStock", headerName: "Stock", width: 150, type: "boolean" },
];

const columnsAddProduct: GridColDef[] = [
  { field: "title", headerName: "Title", type: "text" },
  { field: "price", headerName: "Price (R$)", type: "number" },
  { field: "desc", headerName: "Description", type: "text" },
  // { field: "inStock", headerName: "Stock", width: 150, type: "boolean" },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const productsWithIds = products.map((product, index) => ({
    ...product,
    id: product._id || index,
  }));

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={productsWithIds} />
      {open && (
        <Add slug="product" columns={columnsAddProduct} setOpen={setOpen} />
      )}
    </div>
  );
};
export default Products;
