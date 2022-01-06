import './styles.css';

import Button from 'core/components/Button';
import { saveSessionData } from 'core/utils/auth';
import { makeLogin } from 'core/utils/requests';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


type FormLogin = {
  username: string;
  password: string;
}

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm<FormLogin>();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: FormLogin) => {
    makeLogin(data)
      .then(response => {
        setHasError(false);
        saveSessionData(response.data);
        navigate("/movies");
      })
      .catch(() => {
        setHasError(true);
        navigate("/");
      })
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      
      <h1 className="login-title">Login</h1>
      {hasError && (
        <div className="invalid-feedback">
          <h3>Erro ao tentar fazer login!</h3>
        </div>
      )}
      {errors.username && (
        <div className="invalid-feedback">
          {errors.username.message}
        </div>
      )}
      <input
        type="text"
        className="login-input"
        placeholder="Email"
        {...register("username",
          {
            required: {
              value: true,
              message: "Campo obrigatório"
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
              message: "Email inválido"
            }
          })
        }
      />
      
      {errors.password && (
        <div className="invalid-feedback">
          {errors.password.message}
        </div>
      )}
      <input
        type="password"
        className="login-input"
        placeholder="Senha"
        {...register("password", {
          required: {
            value: true,
            message: "Campo obrigatório"
          },
          minLength: {
            value: 4,
            message: "Quantidade mínima de 4 caracteres"
          }
        })
        }
      />
      
      <Button label="fazer login" />
    </form>
  )
}

export default Login;
