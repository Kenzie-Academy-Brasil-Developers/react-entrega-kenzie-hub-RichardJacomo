import { HeaderContent } from "../../../Styles/Header";

export const Header = () => {
  return (
    <>
      <HeaderContent>
        <h1 className="logo">Kenzie Hub</h1>
        <button className="button-logout">Sair</button>
      </HeaderContent>
    </>
  );
};
