import React, { Component } from "react";
import CreateRecruitment from "../../Components/CreateRecruitment";
import ShowRecruitment from "../../Components/ShowRecruitment";
import ToDoList from "../../Components/ToDoList";
import { getRecruitmentFetch } from "../../Fetches/Recruitments/GetRecruitmentFetch";
import { StyledPlusIcon } from "../../Components/Elements/StyledPlusIcon";
import { StyledKeyboardArrowDownIcon } from "../../Components/Elements/StyledArrowIcon";
import { withRouter } from "react-router";
import {
  StyledWrapper,
  StyledGreetingWrapper,
  StyledGreeting,
  RecruitmentWrapper,
  SectionInfo,
  StyledRecruitmentWrapper
} from "./style";

class User extends Component {
  state = {
    displayCreateRecruitment: false,
    displayBrowseRecruitments: false,
    recruitments: []
  };

  fetchRecruitments = async () => {
    try {
      const fetchResult = await getRecruitmentFetch();
      this.setState({
        recruitments: fetchResult
      });
    } catch (e) {
      this.props.history.push("/");
    }
  };
  updateRecruitments = recruitments => {
    this.setState({
      recruitments
    });
  };

  componentDidMount() {
    this.fetchRecruitments();
  }

  toggleSectionExpansion = type => {
    const property = {
      add: "displayCreateRecruitment",
      browse: "displayBrowseRecruitments"
    }[type];

    this.setState(prevState => ({
      [property]: !prevState[property]
    }));
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
                onClick={() => this.toggleSectionExpansion("add")}
              />
            </SectionInfo>
            {this.state.displayCreateRecruitment && <CreateRecruitment />}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              Show Recruitments
              <StyledKeyboardArrowDownIcon
                onClick={async () => {
                  this.toggleSectionExpansion("browse");
                  await this.fetchRecruitments();
                }}
              />
            </SectionInfo>
            {this.state.displayBrowseRecruitments && (
              <ShowRecruitment
                recruitments={this.state.recruitments}
                updateRecruitments={this.updateRecruitments}
                fetchRecruitments={this.fetchRecruitments}
              />
            )}
          </StyledRecruitmentWrapper>
        </RecruitmentWrapper>
        <ToDoList history={this.props.history} />
      </StyledWrapper>
    );
  }
}

export default withRouter(User);
