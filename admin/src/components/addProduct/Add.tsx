import React, { useState, ChangeEvent } from "react";
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

type AddProduct = {
  title: string;
  price: number;
  description: string;
  categories: string[];
  image: string;
  inStock: boolean;
};

const Add: React.FC<Props> = (props: Props) => {
  const [inputs, setInputs] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string[]>([]);
  // const [color, setcolor] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev: AddProduct) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value.split(","));
  };

  const handleUpload = async () => {
    const product = {
      ...inputs,
      categories: category,
    };

    if (file) {
      const fileName = new Date().getTime() + file.name;
      const filePath = "products/" + fileName;
      const storage = getStorage(app);
      const storageRef = ref(storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      try {
        await new Promise<void>((resolve, reject) => {
          // Handle state change events
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
              console.error(error);
              reject(error);
            },
            () => {
              // Handle successful upload
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  product.image = downloadURL;
                  resolve();
                })
                .catch((error) => {
                  console.error(error);
                  reject(error);
                });
            }
          );
        });
      } catch (error) {
        // Handle errors during the upload or URL retrieval
        console.error("Error during upload:", error);
        return;
      }
    }

    addProduct(product, dispatch);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpload();
    props.setOpen(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    return e.target.value;
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
          <div className="item">
            <label>Imagem</label>
            <input
              name="image"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className="item">
            <select name="inStock" id="" onChange={handleSelectChange}>
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
