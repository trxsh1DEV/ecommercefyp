import { useLocation } from "react-router-dom";
import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { Product as ProductType } from "../../redux/types";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product: ProductType | undefined = useSelector((state: RootState) => {
    return state.product.products.find((product) => product._id === productId);
  });

  //Fetch data and send to Single Component
  return (
    <div className="product">
      <Single product={product} {...singleProduct} />
    </div>
  );
};

export default Product;
