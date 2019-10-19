import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 5px 0px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  margin: 20px;
  width: 220px;
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};

  &::placeholder {
    color: ${({ theme }) => theme.lightgreen};

    transition: transform 0.3s;
  }
  &:focus::placeholder {
    transform: translateY(-50px);
  }
`;
