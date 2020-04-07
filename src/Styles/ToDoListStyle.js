import styled from "styled-components";
import { StyledInput } from "../Shared/Input";
export const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 40px;
    width: auto;
  }
`;
export const StyledHeading = styled.h1`
  ${({ theme }) => theme.purplePrimary};
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border-bottom: 2px solid ${({ theme }) => theme.purplePrimary};
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin: 50px auto 10px;
  color: ${({ theme }) => theme.purplePrimary};

  ${({ theme }) => theme.mq.tablet} {
    margin: 50px auto 20px;
  }
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
    color:red;
  `}
  ${({ emptyLists }) =>
    emptyLists &&
    `
  margin-top:10px;
  text-decoration:underline;

  margin:0px auto;
  `}
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxs};
    width:220px;
    text-align:center;
    ${({ emptyLists, theme }) =>
      emptyLists &&
      `;
  font-size: calc(${theme.font.size.xs} * 0.8)!important;
  margin:0px auto;
  `}

  }
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  ${({ theme }) => theme.mq.tablet} {
    width: 560px;
  }
`;

export const StyledTaskWrapper = styled.div`
  width: 250px;
  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`;
export const ToDoListInput = styled(StyledInput)`
  margin: 0px;
  margin-bottom: 15px;
  width: 100%;
  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 20px;
  }
`;
