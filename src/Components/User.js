import React, { Component } from "react";
import styled from "styled-components";
import CreateRectuitment from "./CreateRecruitment";
import ShowRecruitment from "./ShowRecruitment";
import * as GetRecruitmentFetch from "./Fetches/GetRecruitmentFetch";
import StyledPlus from "./StyledComponents/StyledPlus";
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.lightgreen};
`;

const SectionInfo = styled(StyledH1)`
  color: ${({ theme }) => theme.green};
  padding: 15px;
  font-family: ${({ theme }) => theme.font.family.Didact};

  border: 2px solid ${({ theme }) => theme.green};
  width: 100%;
  display: flex;
  justify-content: space-between;

  text-align: center;
  &:nth-child(1) {
    margin-top: 40px;
  }
`;
const SectionDescription = styled(SectionInfo)`
  margin: 0px;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};
`;
const StyledRecruitmentWrapper = styled.div`
  background-color: ${({ theme }) => theme.lightgreen};
  width: 250px;
`;

class User extends Component {
  state = {
    isRecruitmentBeingCreated: false,
    isRecruitmentBeingBrowsed: false,
    isRecruitmentArchiveBeingBrowsed: false,
    recruitments: []
  };

  handleFetchRecruitments = () => {
    const fetchResult = GetRecruitmentFetch.getRecruitmentFetch(
      localStorage.getItem("token"),
      this
    );
    this.setState({
      recruitments: fetchResult,
      areRecruitmentsEmpty: false
    });
  };
  handleRecruitmentSectionStateUpdate = type => {
    const property = {
      add: "isRecruitmentBeingCreated",
      browse: "isRecruitmentBeingBrowsed",
      archive: "isRecruitmentArchiveBeingBrowsed"
    }[type];

    this.setState(prevState => ({
      [property]: !prevState[property]
    }));
  };
  handleToggleRecruitmentSection = type => {
    switch (type) {
      case "add": {
        this.handleRecruitmentSectionStateUpdate("add");
        break;
      }
      case "browse": {
        this.handleRecruitmentSectionStateUpdate("browse");

        if (this.state.recruitments.length === 0) {
          this.handleFetchRecruitments();
          setTimeout(() => this.forceUpdate(), 1500);
        }
        break;
      }
      case "archive": {
        this.handleRecruitmentSectionStateUpdate("archive");
        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    return (
      <StyledWrapper>
        <StyledGreetingWrapper>
          <StyledGreeting>Dashboard</StyledGreeting>
        </StyledGreetingWrapper>

        <RecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Add Recruitment
              <StyledPlus
                onClick={() => this.handleToggleRecruitmentSection("add")}
              />
            </SectionInfo>
            {/* <SectionDescription>Add new recruitment info</SectionDescription> */}
            {this.state.isRecruitmentBeingCreated ? (
              <CreateRectuitment />
            ) : null}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Show Recruitments
              <StyledPlus
                onClick={() => this.handleToggleRecruitmentSection("browse")}
              />
            </SectionInfo>
            {this.state.isRecruitmentBeingBrowsed ? (
              typeof this.state.recruitments === null ? null : (
                <ShowRecruitment recruitments={this.state.recruitments} />
              )
            ) : null}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Show Archived Recruitments
              <StyledPlus
                onClick={() => this.handleToggleRecruitmentSection("archive")}
              />
            </SectionInfo>
            {this.state.isRecruitmentArchiveBeingBrowsed ? true : null}
          </StyledRecruitmentWrapper>
        </RecruitmentWrapper>
      </StyledWrapper>
    );
  }
}

export default User;
