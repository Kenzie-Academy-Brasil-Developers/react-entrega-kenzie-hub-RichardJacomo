import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../../../Styles/Form";
import axios from "axios";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="title">Kenzie Hub</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login">Login</h2>
        <div className="div-email">
          <label htmlFor="email">Email</label>
          <Input register={register} />
        </div>
        <div className="div-pass">
          <label htmlFor="password">Senha</label>
          <input placeholder="Digite sua senha" {...register("password")} />
        </div>
        <Button />
        <p className="advice">Ainda não possui uma conta?</p>
        <button className="button-register">Cadastrar-se</button>
      </Form>
    </>
  );
};
