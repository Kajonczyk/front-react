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
`;
export const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
  margin: 30px 0px 10px;
`;
export const TaskInput = styled(StyledInput)`
  margin: 0px;
`;
export const StyledTaskDescription = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  padding: 15px 15px 15px 0px;
  margin: 15px;
  width: 250px;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.taskMobileDescription};
  display: flex;
  justify-content: space-between;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
