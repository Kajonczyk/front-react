import React, { Component } from "react";
import styled from "styled-components";
import CreateRectuitment from "./CreateRecruitment";

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.green};
  overflow: hidden;
`;
const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;
`;
const StyledGreetingWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;
const StyledGreeting = styled(StyledH1)`
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  &::after {
    content: "DASHBOARD";
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.055;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 3);
  }
`;

const RecruitmentWrapper = styled.section`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.lightgreen};
`;

const SectionInfo = styled(StyledH1)`
  color: ${({ theme }) => theme.green};
  padding: 5px 15px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  margin-bottom: 30px;
  border: 2px solid ${({ theme }) => theme.green};
  margin-top: 30px;

  text-align: center;
`;
const SectionDescription = styled(SectionInfo)`
  margin: 0px;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};
`;

class User extends Component {
  state = {};

  render() {
    return (
      <StyledWrapper>
        <StyledGreetingWrapper>
          <StyledGreeting>Dashboard</StyledGreeting>
        </StyledGreetingWrapper>

        <RecruitmentWrapper>
          <SectionInfo>Recruitment</SectionInfo>
          <SectionDescription>Add new recruitment info</SectionDescription>
          <CreateRectuitment />
        </RecruitmentWrapper>
      </StyledWrapper>
    );
  }
}

export default User;
