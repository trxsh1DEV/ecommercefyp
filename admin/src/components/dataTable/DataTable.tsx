import { useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { deleteProduct, deleteUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import EditProduct from "../../pages/Edit/Edit"; // Importe o seu modal aqui

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [productId, setProductId] = useState("");

  const handleDelete = (id: string) => {
    if (!id) return;

    switch (props.slug) {
      case "users":
        deleteUser(id, dispatch);
        break;

      case "products":
        deleteProduct(id, dispatch);
        break;
    }
  };

  const handleEditProduct = (id: string) => {
    setIsModalOpen(true);
    setProductId(id); // Defina productId aqui
  };

  const handleEditUser = (id: string) => {
    setIsModalOpen(true);
    console.log(id, "oi"); // Defina productId aqui
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row._id}`}>
            <img src="/edit.svg" alt="" />
          </Link>

          {props.slug === "users" ? (
            <div
              className="edit"
              onClick={() => handleEditUser(params.row._id)}
            >
              <img src="/view.svg" alt="" />
            </div>
          ) : (
            <div
              className="edit"
              onClick={() => handleEditProduct(params.row._id)}
            >
              <img src="/view.svg" alt="" />
            </div>
          )}
          <div className="delete" onClick={() => handleDelete(params.row._id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      {isModalOpen &&
        (props.slug === "users" ? (
          <div>asd</div>
        ) : (
          <EditProduct
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            productId={productId}
          />
        ))}
    </div>
  );
};

export default DataTable;
