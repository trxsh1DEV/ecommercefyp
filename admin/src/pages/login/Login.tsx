import { useState } from "react";
import "./login.scss";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <div className="login">
      <input type="text" name="inputMail" placeholder="Email" />
      <input type="password" name="inputPassword" placeholder="Password" />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
