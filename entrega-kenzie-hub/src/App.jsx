import GlobalStyle from "./Styles/global";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { Header } from "./Components/Pages/Header/Header";
import { LoginPage } from "./Components/Pages/Login/Login";
import { RegisterPage } from "./Components/Pages/Register/Register";
import { HomePage } from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
