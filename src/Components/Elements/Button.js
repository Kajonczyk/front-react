import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 25px
  margin:20px;
  background: none;
  border: 2px solid #BDEFE5;
  border-radius:20px;
  color: ${({ theme }) => theme.lightgreen};
  position:relative;

`;
