import styled from "styled-components";
import { StyledButton } from "../Shared/Button";
export const StyledStatusMessage = styled.div`
  height: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  color: #bdefe5;
  font-size: ${({ theme }) => theme.font.size.spanFormError};
  background-color: red;
  z-index: 15;
`;
export const StyledTickWrapper = styled.div`
  background-color: rgb(62, 197, 157);
  height: 175px;
  line-height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledPopUpTextWrapper = styled.div`
  background-color: white;
  min-height: 175px;
  color: ${({ theme }) => theme.green};
  font-family: ${({ theme }) => theme.font.family.Didact};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const StyledPopUpHeading = styled.h3`
  font-size: 1.35rem;
`;
export const StyledClosePopUpButton = styled(StyledButton)`
  color: ${({ theme }) => theme.green};
  border-color: #2eb041;
  margin-top: 50px;
  color: #2eb041;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
`;
export const StyledPopUpWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  opacity: 0.5;
`;
export const StyledPopUpText = styled.p`
  font-size: 0.95rem;
`;
