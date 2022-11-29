import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div } from "../../../Styles/Register";

export const RegisterPage = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo orbigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Div>
        <div className="div-title-and-button">
          <h1 className="title-register">Kenzie Hub</h1>
          <button className="button-back">Voltar</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="register">Crie sua conta</h2>
          <p className="advice-head">Rápido e grátis, vamos nessa</p>
          <div className="div-name-register">
            <label htmlFor="name">Nome</label>
            <input placeholder="Digite aqui seu nome" {...register("name")} />
            {errors.name?.message}
          </div>
          <div className="div-email-register">
            <label htmlFor="email">Email</label>
            <input placeholder="Digite aqui seu email" {...register("email")} />
            {errors.email?.message}
          </div>
          <div className="div-pass-register">
            <label htmlFor="password">Senha</label>
            <input
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}
          </div>
          <div className="div-pass-register-confirm">
            <label htmlFor="passwordConfirm">Senha</label>
            <input placeholder="Confirme sua senha" />
            {errors.password?.message}
          </div>
          <div className="div-bio">
            <label htmlFor="bio">Bio</label>
            <input placeholder="Fale sobre você" {...register("bio")} />
            {errors.bio?.message}
          </div>
          <div className="div-contact">
            <label htmlFor="contact">Contato</label>
            <input placeholder="Opção de contato" {...register("contact")} />
            {errors.contact?.message}
          </div>
          <div className="div-select">
            <p className="p-select">Selecionar módulo</p>
            <select name="module" id="module" {...register("course_module")}>
              <option value="m1">Primeiro Módulo</option>
            </select>
            {errors.course_module?.message}
          </div>
          <button className="button-register">Cadastrar</button>
        </form>
      </Div>
    </>
  );
};
