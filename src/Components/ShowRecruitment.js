import React, { useState } from "react";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { StyledTrashIcon } from "./Elements/StyledTrashIcon";
import { StyledPencilIcon } from "./Elements/StyledPencilIcon";
import { deleteRecruitmentFetch } from "../Fetches/DeleteRecruitmentFetch";
import CreateRecruitment from "./CreateRecruitment";
import { StatusMessage } from "./StatusMessage";
import {
  StyledDiv,
  StyledWrapper,
  StyledIconWrapper,
  SectionInfo,
  StyledP
} from "../Styles/ShowRecruitmentStyle";

const handleDeleteRecruitment = (item, updateRecruitmentsFunction) => {
  const token = localStorage.getItem("token");
  deleteRecruitmentFetch(item, token, item.id);
  updateRecruitmentsFunction();
};

const ShowRecruitment = ({
  recruitments,
  deleteRecruitmentStatus,
  handleChangeDeleteRecruitmentStatus,
  handleUpdateRecruitments,
  handleFetchRecruitments
}) => {
  const [isRecruitmentBeingEdited, setRecruitmentBeingEditedStatus] = useState(
    false
  );
  const recruitmentItemsCopy = [...recruitments];
  return (
    <>
      <StyledDiv>
        {recruitments.map((item, id) => (
          <StyledWrapper key={item.id}>
            <SectionInfo>
              {item.companyName}
              <StyledKeyboardArrowDownIcon
                onClick={() => {
                  recruitmentItemsCopy[id].isExpanded = !recruitmentItemsCopy[
                    id
                  ].isExpanded;
                  recruitmentItemsCopy[id].isBeingEdited = false;
                  handleUpdateRecruitments(recruitmentItemsCopy);
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
                <StyledP>Company Reply: {item.companyReply}</StyledP>
                <StyledP>Notes: {item.notes}</StyledP>
                <StyledIconWrapper>
                  <StyledTrashIcon
                    onClick={() => {
                      handleChangeDeleteRecruitmentStatus("delete");
                      handleDeleteRecruitment(
                        recruitmentItemsCopy[id],
                        handleFetchRecruitments
                      );
                    }}
                  />
                  <StyledPencilIcon
                    onClick={() => {
                      recruitmentItemsCopy[
                        id
                      ].isBeingEdited = !recruitmentItemsCopy[id].isBeingEdited;
                      setRecruitmentBeingEditedStatus(
                        recruitmentItemsCopy[id].isBeingEdited
                      );
                    }}
                  />
                  {recruitmentItemsCopy[id].isBeingEdited ? (
                    <CreateRecruitment
                      editRecruitment={isRecruitmentBeingEdited}
                      recruitmentId={recruitmentItemsCopy[id].id}
                    />
                  ) : null}
                </StyledIconWrapper>
              </StyledWrapper>
            ) : null}
          </StyledWrapper>
        ))}
      </StyledDiv>
      {deleteRecruitmentStatus && (
        <StatusMessage
          descriptionText="Recruitment info was successfully deleted"
          closeAction={() => handleChangeDeleteRecruitmentStatus("delete")}
        />
      )}
    </>
  );
};
ShowRecruitment.defaultProps = {
  recruitments: []
};

export default ShowRecruitment;
