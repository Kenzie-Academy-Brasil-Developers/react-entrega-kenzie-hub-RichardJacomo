import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  margin-top: 25px;
  width: 30%;
  padding: 0 20px 0 20px;
  max-width: 400px;
  min-width: 300px;

  .login {
    margin-top: 30px;
    margin-bottom: 20px;
    color: white;
    font-size: var(--font-size-3);
  }
  .div-email {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .div-pass {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  input {
    width: 100%;
    background-color: var(--grey-2);
    margin-bottom: 20px;
    height: 40px;
    border-radius: var(--radius-03);
    border: none;
    color: var(--white);
    padding-left: 10px;
  }
  button {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border-radius: var(--radius-03);
    border: none;
  }
  .button-register {
    background-color: var(--grey-1);
    color: white;
  }
  label {
    color: white;
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
  .advice {
    color: var(--grey-1);
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
`;