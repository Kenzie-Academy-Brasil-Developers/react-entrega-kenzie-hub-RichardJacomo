import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Form } from "../../../../Styles/Form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { api } from "../../../../Services/Api";

export const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Senha deve conter no mínimo 8 caracteres, uma letra, um número e um caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const requestResult = (request) => {
    console.log(request);
    if (request.statusText === "OK") {
      toast.success("Login bem sucedido!");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      window.localStorage.setItem(
        "@USERDATA",
        JSON.stringify(response.data.user)
      );
      setUser(response.data.user);
      requestResult(response);
    } catch (error) {
      toast.error("Login mal sucedido!");
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <h1 className="title">Kenzie Hub</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login">Login</h2>
        <div className="div-email">
          <label htmlFor="email">Email</label>
          <Input register={register} />
          {errors.email?.message && (
            <p className="error-msg">{errors.email.message}</p>
          )}
        </div>
        <div className="div-pass">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>
        <Button />
        <p className="advice">Ainda não possui uma conta?</p>
        <Link className="button-register" to="/register">
          Cadastrar-se
        </Link>
      </Form>
    </>
  );
};
