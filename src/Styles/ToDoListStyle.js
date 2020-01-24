import styled from "styled-components";
import { StyledInput } from "../Shared/Input";
export const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledHeading = styled.h1`
  ${({ theme }) => theme.purplePrimary};
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border-bottom: 2px solid ${({ theme }) => theme.purplePrimary};
  text-align: center;
  font-weight: 100;
  width: 200px;
  margin: 20px auto;
  color: ${({ theme }) => theme.purplePrimary};
`;
export const StyledDescription = styled.span`
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
  ${({ error }) =>
    error &&
    `
    margin-top:10px;
    color:red;
  `}
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const StyledTaskWrapper = styled.div`
  width: 250px;
`;
export const ToDoListInput = styled(StyledInput)`
  margin: 0px;
`;
