import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 25px
  margin:20px;
  background: none;
  border: 2px solid ${({ theme }) => theme.purplePrimary};
  border-radius:20px;
  color: ${({ theme }) => theme.purplePrimary};
  position:relative;

`;
