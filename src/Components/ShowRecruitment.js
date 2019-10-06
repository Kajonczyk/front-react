import React, { useState } from "react";
import styled from "styled-components";
import StyledPlus from "./StyledComponents/StyledPlus";

const StyledDiv = styled.div`
  height: 350px;
  overflow-x: scroll;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
            <StyledPlus
              onClick={() => {
                recruitmentItemsCopy[id].isExpanded = !recruitmentItemsCopy[id]
                  .isExpanded;
                setRecruitmentItems(recruitmentItemsCopy);
              }}
            />
          </SectionInfo>
          {recruitmentItemsCopy[id].isExpanded ? (
            <StyledWrapper>
              <p>Hello</p>
              <p>{item.id}</p>
              <p>{item.city}</p>
              <p>{item.workPlace}</p>
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
