import React, { useState } from "react";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { StyledTrashIcon } from "./Elements/StyledTrashIcon";
import { StyledPencilIcon } from "./Elements/StyledPencilIcon";
import { deleteRecruitmentFetch } from "../Fetches/Recruitments/DeleteRecruitmentFetch";
import CreateRecruitment from "./CreateRecruitment";
import {
  StyledDiv,
  StyledWrapper,
  StyledIconWrapper,
  SectionInfo,
  StyledLabel,
  StyledSpan
} from "../Styles/ShowRecruitmentStyle";
import StatusMessage from "./StatusMessage";

const deleteRecruitment = async (item, updateRecruitmentsFunction) => {
  await deleteRecruitmentFetch(item, item.id);
  await updateRecruitmentsFunction();
};

const ShowRecruitment = ({
  recruitments,
  updateRecruitments,
  fetchRecruitments
}) => {
  const [isRecruitmentBeingEdited, setRecruitmentEditStatus] = useState(false);
  const [isPopUpActive, setPopUpActive] = useState(false);
  const recruitmentItemsCopy = [...recruitments];
  return (
    <>
      <StyledDiv>
        {recruitments.map((item, id) => (
          <StyledWrapper key={item.id}>
            <SectionInfo>
              {item.companyName}
              <StyledKeyboardArrowDownIcon
                onClick={async () => {
                  recruitmentItemsCopy[id].isExpanded = !recruitmentItemsCopy[
                    id
                  ].isExpanded;
                  recruitmentItemsCopy[id].isBeingEdited = false;
                  await updateRecruitments(recruitmentItemsCopy);
                }}
              />
            </SectionInfo>
            {recruitmentItemsCopy[id].isExpanded ? (
              <StyledWrapper data>
                <StyledLabel>
                  City: <StyledSpan>{item.city}</StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  Position: <StyledSpan>{item.workPlace}</StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  Application date:{" "}
                  <StyledSpan>{item.applicationDate.substr(0, 10)}</StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  Company Reply:{" "}
                  <StyledSpan>{String(item.companyReply)}</StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  Notes: <StyledSpan>{item.notes}</StyledSpan>
                </StyledLabel>
                <StyledIconWrapper>
                  <StyledTrashIcon
                    onClick={async () => {
                      await deleteRecruitment(
                        recruitmentItemsCopy[id],
                        fetchRecruitments
                      );
                      setPopUpActive(true);
                    }}
                  />
                  <StyledPencilIcon
                    onClick={() => {
                      recruitmentItemsCopy[
                        id
                      ].isBeingEdited = !recruitmentItemsCopy[id].isBeingEdited;
                      setRecruitmentEditStatus(
                        recruitmentItemsCopy[id].isBeingEdited
                      );
                    }}
                  />
                </StyledIconWrapper>
              </StyledWrapper>
            ) : null}
            {recruitmentItemsCopy[id].isBeingEdited ? (
              <CreateRecruitment
                editRecruitment={isRecruitmentBeingEdited}
                recruitmentId={recruitmentItemsCopy[id].id}
                updateRecruitments={updateRecruitments}
                updatePopUpStatus={setPopUpActive}
              />
            ) : null}
          </StyledWrapper>
        ))}
        {isPopUpActive && (
          <StatusMessage
            descriptionText="Action successful"
            closeAction={() => setPopUpActive(false)}
          />
        )}
      </StyledDiv>
    </>
  );
};
ShowRecruitment.defaultProps = {
  recruitments: []
};

export default ShowRecruitment;
