import { HeaderContent } from "../../../Styles/Header";
import { Link } from "react-router-dom";

export const Header = () => {
  const clearLocalStorage = () => {
    window.localStorage.clear();
  };

  return (
    <>
      <HeaderContent>
        <h1 className="logo">Kenzie Hub</h1>
        <Link
          onClick={() => clearLocalStorage()}
          className="button-logout"
          to="/"
        >
          Sair
        </Link>
      </HeaderContent>
    </>
  );
};
