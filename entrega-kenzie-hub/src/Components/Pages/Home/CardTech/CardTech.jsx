import del from "../../../../Assets/del.png";
import { useContext } from "react";
import { TechContext } from "../../../../Contexts";
import { Li } from "../../../../Styles/CardTech";
import { FormModalEdit } from "../ModalEdit/ModalEdit";

export const CardTech = () => {
  const { user, deleteItem, modalEdit, setModalEdit, setModalPlaceholder } =
    useContext(TechContext);

  const userTechs = user.techs;

  const openModalEdit = (value) => {
    setModalPlaceholder(value);
    modalEdit === true ? setModalEdit(false) : setModalEdit(true);
    // pegar value.id e enviar na requisição e criar a requisição aqui
  };

  return (
    <>
      {modalEdit === true ? <FormModalEdit /> : ""}
      {userTechs?.map((data) => (
        <Li key={data.id} className="li-tech">
          <h2 onClick={() => openModalEdit(data)} className="tech">
            {data.title}
          </h2>
          <div className="div-level-and-delete">
            <p className="text-level">{data.status}</p>
            <button
              onClick={() => deleteItem(data.id)}
              className="button-delete"
            >
              <img src={del} alt="" />
            </button>
          </div>
        </Li>
      ))}
    </>
  );
};