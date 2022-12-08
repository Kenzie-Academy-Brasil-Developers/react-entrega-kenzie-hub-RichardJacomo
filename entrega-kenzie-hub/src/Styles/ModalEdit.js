import styled from "styled-components";

export const ModalEdit = styled.div`
  width: 90%;
  height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;

  .div-global {
    max-width: 340px;
    width: 340px;

    border-radius: var(--radius-03);
    overflow: hidden;
  }

  .div-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
    width: 100%;
    height: 60px;
    padding: 20px;
    padding-bottom: 40px;
  }
  .title {
    font-size: 16px;
    height: 20px;
    color: white;
    transform: translate(0, -30px);
  }
  .button-close {
    height: 20px;
    color: white;
    background-color: var(--grey-2);
    border: none;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    width: 100%;
    padding: 20px;
  }
  label {
    margin-bottom: 10px;
    font-size: var(--font-size-4);
  }
  input,
  button,
  .select-level {
    height: 40px;
    padding: 10px;
    border-radius: var(--radius-03);
    border: none;
  }
  .input-modal {
    background-color: var(--grey-2);
    color: white;
    margin-bottom: 20px;
  }
  .select-level {
    margin-bottom: 20px;
    background-color: var(--grey-2);
    color: white;
  }
  .button-send {
    background-color: var(--color-primary);
    color: white;
    width: 60%;
  }
  .buttons-fotter {
    display: flex;
    justify-content: space-between;
  }
  .button-del {
    width: 35%;
    color: white;
    background-color: var(--grey-1);
  }
`;
