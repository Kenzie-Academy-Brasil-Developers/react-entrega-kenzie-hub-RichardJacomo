import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid var(--grey-2);
  padding: 20px 0 20px 0;
  align-items: center;

  .logo {
    color: var(--color-primary);
    font-size: var(--font-size-2);
  }
  .button-logout {
    padding: 8px;
    background-color: var(--grey-2);
    border: none;
    color: white;
    border-radius: var(--radius-03);
  }
`;
