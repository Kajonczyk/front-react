import styled from "styled-components";
import { StyledInput } from "../Shared/Input";
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledTaskWrapper = styled(StyledWrapper)`
  width: 250px;
  ${({ theme }) => theme.mq.tablet} {
    width: 560px;
  }
`;
export const StyledDescription = styled.span`
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
  margin: 30px 0px 10px;
  ${({ error }) =>
    error &&
    `
    margin: 10px 0px 0px;
    color:red;
  `}
`;
export const TaskInput = styled(StyledInput)`
  margin: 0px;
  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
  }
`;
export const StyledTaskDescription = styled.p`
  color: ${({ theme }) => theme.purplePrimary};
  border-bottom: 2px solid ${({ theme }) => theme.purplePrimary};
  padding: 15px 0px 5px 0px;
  margin: 15px;
  width: 250px;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.taskMobileDescription};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
  }
`;
export const StyledSpan = styled.span`
  width: 100%;
  word-break: break-all;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
