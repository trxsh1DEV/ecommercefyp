import "./style.scss";

const PermissionDenied = () => {
  return (
    <div className="permission-denied">
      <div className="content">
        <h1>Você não tem permissão</h1>
        <p>Desculpe, você não tem permissão para acessar esta página.</p>
      </div>
    </div>
  );
};

export default PermissionDenied;
