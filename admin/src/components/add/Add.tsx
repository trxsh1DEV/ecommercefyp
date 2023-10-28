import React, { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add: React.FC<Props> = (props: Props) => {
  const [inputs, setInputs] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string[]>([]);
  // const [color, setcolor] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value.split(","));
  };

  const handleUpload = () => {
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Restante do código de upload
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe eventos de mudança de estado, como progresso, pausa e retomada
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload está " + progress + "% completo");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload pausado");
              break;
            case "running":
              console.log("Upload em andamento");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
          // Lógica de tratamento de erro
        },
        () => {
          // Lógica de conclusão
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {
              ...inputs,
              image: downloadURL,
              categories: category,
            };
            console.log(product);
            addProduct(product, dispatch);
          });
        }
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpload();
    props.setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  name={column.field}
                  type={column.type as string}
                  placeholder={column.field}
                  onChange={handleChange}
                />
              </div>
            ))}
          <div className="item">
            <label>Categorias</label>
            <input
              type="text"
              placeholder="mouse,gamer"
              onChange={handleCategories}
            />
          </div>
          {/* <div className="item">
            <label>Color</label>
            <input
              name="color"
              type="text"
              placeholder="black,white"
              onChange={handleCategories}
            />
          </div> */}
          <div className="item">
            <label>Imagem</label>
            <input
              name="image"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="item">
            <select name="inStock" id="" onChange={handleChange}>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
