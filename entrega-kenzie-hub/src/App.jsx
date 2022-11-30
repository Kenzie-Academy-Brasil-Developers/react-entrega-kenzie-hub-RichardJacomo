import GlobalStyle from "./Styles/global";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Components/Pages/Login/Login";
import { RegisterPage } from "./Components/Pages/Register/Register";
import { HomePage } from "./Components/Pages/Home/Home";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const dataUSer = JSON.parse(window.localStorage.getItem("@USERDATA"));
    setUser(dataUSer);
  }, []);

  return (
    <div className="container">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
