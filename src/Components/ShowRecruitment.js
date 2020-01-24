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
  StyledP
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
              <StyledWrapper>
                <StyledP>City: {item.city}</StyledP>
                <StyledP>Position: {item.workPlace}</StyledP>
                <StyledP>
                  Application date: {item.applicationDate.substr(0, 10)}
                </StyledP>
                <StyledP>Company Reply: {String(item.companyReply)}</StyledP>
                <StyledP>Notes: {item.notes}</StyledP>
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
                  {recruitmentItemsCopy[id].isBeingEdited ? (
                    <CreateRecruitment
                      editRecruitment={isRecruitmentBeingEdited}
                      recruitmentId={recruitmentItemsCopy[id].id}
                      updateRecruitments={updateRecruitments}
                      updatePopUpStatus={setPopUpActive}
                    />
                  ) : null}
                </StyledIconWrapper>
              </StyledWrapper>
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
