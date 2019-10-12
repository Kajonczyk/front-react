import React, { useState } from "react";
import styled from "styled-components";
import StyledKeyboardArrowDown from "./StyledComponents/StyledArrow";
import StyledTrash from "./StyledComponents/StyledTrash";
import StyledPencil from "./StyledComponents/StyledPencil";
import DeleteRecruitmentFetch from "./Fetches/DeleteRecruitmentFetch";

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
  border-bottom: 2px solid;
  border-bottom: 1px solid;
  border-style: dotted;
  padding: 5px;
  text-align: center;
`;

const ShowRecruitment = ({ recruitments }) => {
  const [recruitmentItems, setRecruitmentItems] = useState(recruitments);
  const recruitmentItemsCopy = [...recruitments];
  return (
    <StyledDiv>
      {recruitmentItems.map((item, id) => (
        <StyledWrapper key={item.id}>
          <SectionInfo>
            {item.companyName}
            <StyledKeyboardArrowDown
              onClick={() => {
                recruitmentItemsCopy[id].isExpanded = !recruitmentItemsCopy[id]
                  .isExpanded;
                setRecruitmentItems(recruitmentItemsCopy);
              }}
            />
          </SectionInfo>
          {recruitmentItemsCopy[id].isExpanded ? (
            <StyledWrapper>
              <StyledP>City: {item.city}</StyledP>
              <StyledP>Position: {item.workPlace}</StyledP>
              <StyledIconWrapper>
                <StyledTrash
                  onClick={() =>
                    DeleteRecruitmentFetch(
                      recruitmentItemsCopy[id],
                      localStorage.getItem("token"),
                      recruitmentItemsCopy[id].id
                    )
                  }
                />
                <StyledPencil />
              </StyledIconWrapper>
            </StyledWrapper>
          ) : null}
        </StyledWrapper>
      ))}
    </StyledDiv>
  );
};
ShowRecruitment.defaultProps = {
  recruitments: []
};

export default ShowRecruitment;
