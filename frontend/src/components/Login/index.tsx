import Button from "components/Button";
import "./styles.css";

const Login = () => {
  return (
    <div className="login-form">
      <h1 className="login-title">Login</h1>
      <input type="text" className="login-input" placeholder="Email" />
      <input type="password" className="login-input" placeholder="Senha" />
      <Button />
    </div>
  )
}

export default Login;
