import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/apiCalls"; // Substitua pelo caminho correto do seu arquivo de ações
import { RootState } from "../../redux/types";
import Loading from "../../components/Loading/index";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import AddGeneral from "../../components/addProduct/AddGeneral";

const columns: GridColDef[] = [
  { field: "id", type: "string", headerName: "ID", width: 60 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    renderCell: (params: any) => {
      return <img src={params.row.avatar || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "username",
    type: "string",
    headerName: "Username",
    width: 130,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "isAdmin",
    type: "boolean",
    // renderCell: () => {
    //   return <input type="checkbox" />;
    // },
    headerName: "IsAdmin?",
    width: 120,
  },
  {
    field: "telephone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 140,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 80,
    type: "boolean",
  },
];

const UserComponent = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const isFetching = useSelector((state: any) => state.users.isFetching);

  useEffect(() => {
    getUser(dispatch);
  }, []);

  const productsWithIds = users.map((product, index) => ({
    ...product,
    id: product._id || index,
  }));

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <div className="users">
            <div className="info">
              <h1>Users</h1>
              <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={productsWithIds} />
            {open && (
              <AddGeneral slug="product" columns={columns} setOpen={setOpen} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserComponent;
