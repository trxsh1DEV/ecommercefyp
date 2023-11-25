import { Link } from "react-router-dom";
import "./style.scss";

const PermissionDenied = () => {
  return (
    <div className="permission-denied">
      <div className="content">
        <h1>Você não tem permissão</h1>
        <p>Desculpe, você não tem permissão para acessar esta página.</p>
        <Link to="login" className="link">
          Faça login
        </Link>
      </div>
    </div>
  );
};

export default PermissionDenied;
