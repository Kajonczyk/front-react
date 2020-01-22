import styled from "styled-components";

export const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.purplePrimary};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: calc(${({ theme }) => theme.font.size.s} * 0.9);
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const StyledLoginBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s 1s;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
`;
export const StyledFormText = styled.span`
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  color: ${({ theme }) => theme.purplePrimary};
  text-decoration: underline;
  cursor: pointer;
  margin: 20px 0px 10px;
`;
