import React from "react";
import { StyledTick } from "./Elements/StyledTick";
import {
  StyledStatusMessage,
  StyledTickWrapper,
  StyledPopUpTextWrapper,
  StyledPopUpHeading,
  StyledClosePopUpButton,
  StyledPopUpWrapper,
  StyledPopUpText
} from "../Styles/StatusMessageStyle";

export const StatusMessage = ({ descriptionText, closeAction }) => {
  return (
    <>
      <StyledPopUpWrapper onClick={closeAction}></StyledPopUpWrapper>
      <StyledStatusMessage>
        <StyledTickWrapper>
          <StyledTick />
        </StyledTickWrapper>
        <StyledPopUpTextWrapper>
          <StyledPopUpHeading>Success</StyledPopUpHeading>
          <StyledPopUpText>{descriptionText}</StyledPopUpText>
          <StyledClosePopUpButton onClick={closeAction}>
            Close
          </StyledClosePopUpButton>
        </StyledPopUpTextWrapper>
      </StyledStatusMessage>
    </>
  );
};

export default StatusMessage;
