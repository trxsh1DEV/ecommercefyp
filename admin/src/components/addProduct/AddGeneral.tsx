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
  const randomFunc = () => {
    return "45573475Ygo-";
  };
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<any>({
    password: randomFunc(),
    isAdmin: false, // Novo campo para representar o checkbox
  });

  const passwordColumn: GridColDef = {
    field: "password",
    type: "password",
    headerName: "Password",
  };

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
    const { name, value, type, checked } = e.target;

    setInputs((prev: Props) => {
      // Se o tipo for checkbox, use o valor booleano
      const newValue = type === "checkbox" ? checked : value;

      return { ...prev, [name]: newValue };
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
                item.field !== "createdAt" &&
                item.field !== "verified" &&
                item.field !== "password"
            )
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                {column.type === "boolean" ? (
                  <input
                    type="checkbox"
                    checked={inputs[column.field]}
                    onChange={handleChange}
                    name={column.field}
                  />
                ) : (
                  <input
                    type={column.type}
                    placeholder={column.field}
                    onChange={handleChange}
                    name={column.field}
                  />
                )}
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
