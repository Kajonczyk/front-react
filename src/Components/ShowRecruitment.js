import React, { useState } from "react";
import styled from "styled-components";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { StyledTrashIcon } from "./Elements/StyledTrashIcon";
import { StyledPencilIcon } from "./Elements/StyledPencilIcon";
import { deleteRecruitmentFetch } from "../Fetches/DeleteRecruitmentFetch";
import CreateRecruitment from "./CreateRecruitment";
import { StatusMessage } from "./StatusMessage";

const StyledDiv = styled.div`
  height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;
const SectionInfo = styled.h1`
  color: ${({ theme }) => theme.lightgreen};
  margin: 0px auto;
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border: 2px solid ${({ theme }) => theme.lightgreen};

  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-weight: 100;
`;
const StyledP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  margin-top: 30px;
  border: 0px;
  border-bottom: 1px solid;
  border-style: dotted;
  padding: 5px;
  text-align: center;
  word-break: break-word;
`;
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
