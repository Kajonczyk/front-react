import styled from "styled-components";
import { StyledInput } from "../Shared/Input";
export const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 0px;
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
  width: 100px;
  margin: 20px auto;
  color: ${({ theme }) => theme.purplePrimary};

  ${({ theme }) => theme.mq.tablet} {
    margin: 30px auto 0px;
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
    margin-top:10px;
    color:red;
  `}
  ${({ emptyLists, theme }) =>
    emptyLists &&
    `
  margin-top:10px;
  text-decoration:underline;
  font-size: calc(${theme.font.size.xs} * 0.8)
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
