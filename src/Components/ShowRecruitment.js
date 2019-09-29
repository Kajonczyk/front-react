import React from "react";
import styled from "styled-components";
import StyledPlus from "./StyledPlus";

const StyledDiv = styled.div`
  height: 350px;
  overflow-x: scroll;
`;
const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.lightgreen};
`;

const SectionInfo = styled.h1`
  color: ${({ theme }) => theme.green};
  margin: 0px auto;
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border: 2px solid ${({ theme }) => theme.green};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const ShowRecruitment = ({ recruitments }) => {
  return (
    <StyledDiv>
      {recruitments[0].map(item => (
        <StyledWrapper key={item.id}>
          <SectionInfo>
            {item.companyName}

            <StyledPlus />
          </SectionInfo>
        </StyledWrapper>
      ))}
    </StyledDiv>
  );
};

export default ShowRecruitment;
