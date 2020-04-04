import styled from "styled-components";
import { StyledButton } from "../Shared/Button";
import { StyledInput } from "../Shared/Input";
export const StyledDescription = styled.span`
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  display: block;
  position: relative;
  ${({ checkbox }) =>
    checkbox &&
    `
  display:inline;
  padding-right: 20px;
  margin-left: -20px;
  font-weight:100;`}
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxs};
    ${({ checkbox, theme }) =>
      checkbox &&
      `
    font-size: ${theme.font.size.xs};
    `}
  }
`;
export const InputWrapper = styled.div`
  margin: 20px 20px 10px;
  ${({ checkbox }) =>
    checkbox &&
    `
    margin: 0px 20px 30px;
    `}
`;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 40px;
  }
`;
export const Input = styled(StyledInput)`
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
  margin: 20px auto;
  margin-bottom: 10px;
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
  border-bottom: 2px solid ${({ theme }) => theme.purplePrimary};
  margin: 15px 0px;
  color: ${({ theme }) => theme.purplePrimary};
  width: 220px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.purplePrimary};
    font-size: calc(${({ theme }) => theme.font.size.formMobileText} * 0.93);
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
    width: 560px;
    height: 100px;
    margin-top: 10px;
    &::placeholder {
      font-size: ${({ theme }) => theme.font.size.xs};
    }
  }
`;
export const StyledFieldsWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: calc(${({ theme }) => theme.font.size.formMobileText} * 1);
  position: relative;
`;
export const InputCheck = styled.span`
  position: relative;
  z-index: 1;
  ${({ inputChecked, theme }) =>
    inputChecked &&
    `
    &:before{
      content: "";
      position:absolute;
      width:9px;
      height:9px;
      background-color:${theme.purplePrimary};
      left: -12px;
    top: -4px;
      z-index:1;
      
    }
    ${theme.mq.tablet} {
      &:before{
        width:11px;
        height:11px;
        left: -14px;
        top: -5px;
      }
    }

`}
`;
