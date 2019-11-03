import styled from "styled-components";
import { StyledButton } from "../Shared/Button";
import { StyledInput } from "../Shared/Input";
export const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
`;
export const InputWrapper = styled.div`
  margin: 20px;
`;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled(StyledInput)`
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
  margin: 0px auto;
  text-align: center;
`;
export const SubmitButton = styled(StyledButton)`
  margin-top: -20px;
  position: relative;
  &::after {
  }
`;
export const StyledTextArea = styled.textarea`
  padding-bottom: 30px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  margin: 15px 0px;
  color: ${({ theme }) => theme.lightgreen};
  width: 220px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.lightgreen};
  }
`;
