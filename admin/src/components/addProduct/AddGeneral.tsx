import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "../../redux/apiCalls";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const [inputs, setInputs] = useState<any>({});
  const dispatch = useDispatch();

  const passwordColumn: GridColDef = {
    field: "password",
    type: "password",
    headerName: "Password",
  };

  // Criar uma cópia das colunas originais e adicionar o campo password
  const columnsWithPassword = [...props.columns, passwordColumn];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpload();
    props.setOpen(false);
  };

  const handleUpload = async () => {
    const data = { ...inputs };
    addUser(data, dispatch);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev: Props) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {columnsWithPassword
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "avatar" &&
                item.field !== "createdAt" &&
                item.field !== "verified"
            )
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  onChange={handleChange}
                  name={column.field}
                />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
