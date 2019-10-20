import React, { Component } from "react";
import styled from "styled-components";
import CreateRecruitment from "./CreateRecruitment";
import ShowRecruitment from "./ShowRecruitment";
import ToDoList from "./ToDoList";
import { getRecruitmentFetch } from "../Fetches/GetRecruitmentFetch";
import { StyledPlusIcon } from "./Elements/StyledPlusIcon";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { withRouter } from "react-router";
const StyledWrapper = styled.div`
  background-image: linear-gradient(0deg, #093028, #237a57);
  overflow: hidden;
  min-height: 100vh;
`;
const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;
  font-weight: 100;
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
  margin-top: -20px;
`;

const SectionInfo = styled(StyledH1)`
  color: ${({ theme }) => theme.lightgreen};
  padding: 15px;
  font-family: ${({ theme }) => theme.font.family.Didact};

  border: 2px solid ${({ theme }) => theme.lightgreen};
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  text-align: center;
  &:nth-child(1) {
    margin-top: 40px;
  }
`;
const StyledRecruitmentWrapper = styled.div`
  width: 250px;
`;

class User extends Component {
  state = {
    isRecruitmentBeingCreated: false,
    isRecruitmentBeingBrowsed: false,
    isRecruitmentArchiveBeingBrowsed: false,
    recruitments: []
  };

  handleFetchRecruitments = async () => {
    const fetchResult = await getRecruitmentFetch(
      localStorage.getItem("token")
    );
    this.setState({
      recruitments: fetchResult,
      areRecruitmentsEmpty: false
    });
  };
  componentDidMount() {
    this.handleFetchRecruitments();
  }
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
              <StyledPlusIcon
                onClick={() => this.handleToggleRecruitmentSection("add")}
              />
            </SectionInfo>
            {this.state.isRecruitmentBeingCreated ? (
              <CreateRecruitment
                updateShowRecruitments={this.handleFetchRecruitments}
              />
            ) : null}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Show Recruitments
              <StyledKeyboardArrowDownIcon
                onClick={() => this.handleToggleRecruitmentSection("browse")}
              />
            </SectionInfo>
            {this.state.isRecruitmentBeingBrowsed ? (
              <ShowRecruitment recruitments={this.state.recruitments} />
            ) : null}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Show Archived Recruitments
              <StyledKeyboardArrowDownIcon
                onClick={() => this.handleToggleRecruitmentSection("archive")}
              />
            </SectionInfo>
            {this.state.isRecruitmentArchiveBeingBrowsed ? true : null}
          </StyledRecruitmentWrapper>
        </RecruitmentWrapper>
        <ToDoList />
      </StyledWrapper>
    );
  }
}

export default withRouter(User);
