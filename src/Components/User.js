import React, { Component } from "react";
import styled from "styled-components";
import CreateRectuitment from "./CreateRecruitment";
import ShowRecruitment from "./ShowRecruitment";
import * as GetRecruitmentFetch from "./Fetches/GetRecruitmentFetch";
import StyledPlus from "./StyledPlus";
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
// const StyledPlus = styled(Plus)`
//   height: 20px;
//   width: 20px;
//   color: ${({ theme }) => theme.green};
//   transition: all 1s;
//   &:hover {
//     transform: rotateZ(180deg);
//   }
// `;

class User extends Component {
  state = {
    isRecruitmentBeingCreated: false,
    isRecruitmentBeingBrowsed: false,
    isRecruitmentArchiveBeingBrowsed: false,
    recruitments: []
  };
  handleToggleRecruitment = type => {
    if (type === "add") {
      this.setState({
        isRecruitmentBeingCreated: !this.state.isRecruitmentBeingCreated
      });
    } else if (type === "browse") {
      this.setState({
        isRecruitmentBeingBrowsed: !this.state.isRecruitmentBeingBrowsed
      });

      if (this.state.recruitments.length === 0) {
        const URL = "http://localhost:5001/api/recruitment";

        GetRecruitmentFetch.getRecruitmentFetch(
          URL,
          localStorage.getItem("token"),
          this.state.recruitments
        );

        setTimeout(() => this.forceUpdate(), 500);
      }
      //
    } else if (type === "archive") {
      this.setState({
        isRecruitmentArchiveBeingBrowsed: !this.state
          .isRecruitmentArchiveBeingBrowsed
      });
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
              <StyledPlus onClick={() => this.handleToggleRecruitment("add")} />
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
                onClick={() => this.handleToggleRecruitment("browse")}
              />
            </SectionInfo>
            {this.state.isRecruitmentBeingBrowsed ? (
              this.state.recruitments.length === 0 ? null : (
                <ShowRecruitment recruitments={this.state.recruitments} />
              )
            ) : null}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Show Archived Recruitments
              <StyledPlus
                onClick={() => this.handleToggleRecruitment("archive")}
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
