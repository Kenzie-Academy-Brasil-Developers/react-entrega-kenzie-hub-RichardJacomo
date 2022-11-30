import { DivHome } from "../../../Styles/Home";
import { Header } from "../Header/Header";
import del from "../../../Assets/del.png";

export const HomePage = ({ user }) => {
  return (
    <DivHome>
      <Header />
      <section className="div-name-and-description">
        <h1 className="name-profile">Olá, {user.name}</h1>
        <p className="description-profile">{user.course_module}</p>
      </section>
      <main className="main-content">
        <div className="div-title-tech">
          <h1 className="title-tech">Tecnologias</h1>
          <button className="button-tech-add">+</button>
        </div>
        <ul className="ul-tech">
          <li className="li-tech">
            <h2 className="tech">React.js</h2>
            <div className="div-level-and-delete">
              <p className="text-level">Intermediário</p>
              <button className="button-delete">
                <img src={del} alt="" />
              </button>
            </div>
          </li>
          <li className="li-tech">
            <h2 className="tech">Next.js</h2>
            <div className="div-level-and-delete">
              <p className="text-level">Intermediário</p>
              <button className="button-delete">
                <img src={del} alt="" />
              </button>
            </div>
          </li>
          <li className="li-tech">
            <h2 className="tech">Styled Components</h2>
            <div className="div-level-and-delete">
              <p className="text-level">Intermediário</p>
              <button className="button-delete">
                <img src={del} alt="" />
              </button>
            </div>
          </li>
          <li className="li-tech">
            <h2 className="tech">JavaScript</h2>
            <div className="div-level-and-delete">
              <p className="text-level">Intermediário</p>
              <button className="button-delete">
                <img src={del} alt="" />
              </button>
            </div>
          </li>
        </ul>
      </main>
    </DivHome>
  );
};
