import React, { useState, useEffect } from "react";
import "./edit.scss";
import { userRequest } from "../../utils/requestMethods";
import { Product } from "../../redux/types";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  // Adicione outras props conforme necessário
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const disp = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      if (isOpen && productId) {
        try {
          const response = await userRequest.get(`/products/${productId}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Erro na busca do produto:", error);
        }
      }
    };

    fetchProduct();
  }, [isOpen, productId]);

  const handleSave = async () => {
    if (product) {
      try {
        await updateProduct(productId, product, disp);
        console.log("success");
        onClose();
      } catch (err) {
        console.log(err);
      }
    }
  };
  // if (product) {
  //   // Converta o objeto product em um array de pares chave-valor
  //   productArray = Object.entries(product);
  //   // Faça o que você precisa com productArray
  //   console.log(productArray);
  // } else {
  //   console.log("O objeto product é nulo ou indefinido.");
  // }

  // Se o modal estiver fechado ou o produto não foi carregado, não renderize nada
  if (!isOpen || !product) return null;

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={onClose}>
          X
        </span>
        <h1>Editar Produto</h1>
        <form>
          <div className="item">
            <label>Título</label>
            <input
              type="text"
              name="name"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </div>

          <div className="item">
            <label>Descrição</label>
            <input
              type="text"
              name="name"
              value={product.desc}
              onChange={(e) => setProduct({ ...product, desc: e.target.value })}
            />
          </div>

          <div className="item">
            <label>Categorias</label>
            <input
              type="text"
              name="name"
              value={product.categories}
              onChange={(e) =>
                setProduct({
                  ...product,
                  categories: e.target.value.split(","),
                })
              }
            />
          </div>

          <div className="item">
            <label>Cor(es)</label>
            <input
              type="text"
              name="name"
              value={product.color}
              onChange={(e) =>
                setProduct({ ...product, color: e.target.value.split(",") })
              }
            />
          </div>

          <div className="item">
            <label>Preço</label>
            <input
              type="text"
              name="name"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>

          <div className="item">
            <label>Em estoque</label>
            <input
              type="text"
              name="name"
              value={product.inStock.toString()}
              onChange={(e) =>
                setProduct({ ...product, inStock: e.target.value })
              }
            />
          </div>
          <button type="submit" onClick={handleSave}>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
