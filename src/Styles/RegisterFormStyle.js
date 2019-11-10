import styled from "styled-components";
import { StyledButton } from "../Shared/Button";
export const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.s};
  padding-top: 10px;
  margin-bottom: 20px;
  margin-top: -50px;
  text-transform: uppercase;
`;

export const StyledLoginBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
`;
export const StyledFormText = styled.span`
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  color: ${({ theme }) => theme.lightgreen};
  text-decoration: underline;
  cursor: pointer;
  margin: 10px;
`;
export const SubmitButton = styled(StyledButton)`
  margin-bottom: -20px;
`;
