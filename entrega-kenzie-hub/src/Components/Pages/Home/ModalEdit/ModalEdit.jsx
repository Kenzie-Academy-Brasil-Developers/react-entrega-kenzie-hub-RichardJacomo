import { useContext } from "react";
import { TechContext } from "../../../../Contexts";
import { ModalEdit } from "../../../../Styles/ModalEdit";

export const FormModalEdit = () => {
  const { setModalEdit, modalPlaceholder } = useContext(TechContext);
  return (
    <ModalEdit>
      <div className="div-global">
        <div className="div-title">
          <h1 className="title">Tecnologia Detalhes</h1>
          <button onClick={() => setModalEdit(false)} className="button-close">
            X
          </button>
        </div>
        <form className="form-content">
          <label htmlFor="name">Nome do projeto</label>
          <input
            className="input-modal"
            type="text"
            placeholder={modalPlaceholder.title}
          />
          <label htmlFor="name">Status</label>
          <select className="select-level">
            <option value={modalPlaceholder.status}>
              {modalPlaceholder.status}
            </option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="avançado">Avançado</option>
          </select>
          <button className="button-send">Salvar alterações</button>
        </form>
      </div>
    </ModalEdit>
  );
};
