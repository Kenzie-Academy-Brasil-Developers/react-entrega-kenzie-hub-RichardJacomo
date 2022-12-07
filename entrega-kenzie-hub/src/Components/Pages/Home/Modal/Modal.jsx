import { useContext } from "react";
import { TechContext } from "../../../../Contexts";
import { Modal } from "../../../../Styles/Modal";

export const FormModal = () => {
  const { setModal } = useContext(TechContext);
  return (
    <Modal>
      <div className="div-global">
        <div className="div-title">
          <h1 className="title">Cadastrar Tecnologia</h1>
          <button onClick={() => setModal(false)} className="button-close">
            X
          </button>
        </div>
        <form className="form-content">
          <label htmlFor="name">Nome</label>
          <input
            className="input-modal"
            type="text"
            placeholder="Digite o nome da tecnologia"
          />
          <label htmlFor="name">Selecionar status</label>
          <select className="select-level">
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="avançado">Avançado</option>
          </select>
          <button className="button-send">Cadastrar Tecnologia</button>
        </form>
      </div>
    </Modal>
  );
};
