import './Login.css';
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider';
function Login() {
    const { login } = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        login(data.email, data.password);
        navigate("/");
    }
  // set window title
  document.title = "Le Fishe - Login";
  return (
      <div className="main">
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='email' {...register("email",{ required: true })} />
                <input placeholder='password' {...register("password", { required: true })} />
                <input type="submit" />
            </form>
        </div>
      </div>
  );
}

export default Login;