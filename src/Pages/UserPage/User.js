import React, { Component } from "react";
import CreateRecruitment from "../../Components/CreateRecruitment";
import ShowRecruitment from "../../Components/ShowRecruitment";
import ToDoList from "../../Components/ToDoList";
import { getRecruitmentFetch } from "../../Fetches/Recruitments/GetRecruitmentFetch";
import { StyledPlusIcon } from "../../Components/Elements/StyledPlusIcon";
import { StyledKeyboardArrowDownIcon } from "../../Components/Elements/StyledArrowIcon";
import history from "../../Utils/history";
import { withRouter } from "react-router";
import {
  StyledWrapper,
  StyledGreetingWrapper,
  StyledGreeting,
  RecruitmentWrapper,
  SectionInfo,
  StyledRecruitmentWrapper,
  StyledContentWrapper
} from "./style";

class User extends Component {
  state = {
    displayCreateRecruitment: false,
    displayBrowseRecruitments: false,
    displayToDoLists: false,
    isMobile: false,
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
    this.getBrowserWidth();
    window.addEventListener("resize", this.getBrowserWidth.bind(this));
  }
  getBrowserWidth() {
    this.setState({
      isMobile: window.innerWidth < 768
    });
  }
  toggleDropdowns = () => {
    this.setState({
      displayCreateRecruitment: false,
      displayBrowseRecruitments: false
    });
  };

  toggleSectionExpansion = type => {
    const property = {
      add: "displayCreateRecruitment",
      browse: "displayBrowseRecruitments",
      toDo: "displayToDoLists"
    }[type];

    this.setState(prevState => ({
      [property]: !prevState[property]
    }));
  };

  render() {
    const {
      displayCreateRecruitment,
      displayBrowseRecruitments,
      displayToDoLists,
      isMobile
    } = this.state;
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
                onClick={() => {
                  this.toggleSectionExpansion("add");
                }}
              />
            </SectionInfo>
            {displayCreateRecruitment && isMobile && <CreateRecruitment />}
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
            {displayBrowseRecruitments && isMobile && (
              <ShowRecruitment
                recruitments={this.state.recruitments}
                updateRecruitments={this.updateRecruitments}
                fetchRecruitments={this.fetchRecruitments}
              />
            )}
          </StyledRecruitmentWrapper>
          <StyledRecruitmentWrapper>
            <SectionInfo>
              To Do Lists
              <StyledKeyboardArrowDownIcon
                onClick={() => {
                  this.toggleSectionExpansion("toDo");
                }}
              />
            </SectionInfo>
            {displayToDoLists && isMobile && <ToDoList history={history} />}
          </StyledRecruitmentWrapper>
        </RecruitmentWrapper>
        <StyledContentWrapper>
          {displayCreateRecruitment && !isMobile && <CreateRecruitment />}
          {displayBrowseRecruitments && !isMobile && (
            <ShowRecruitment
              recruitments={this.state.recruitments}
              updateRecruitments={this.updateRecruitments}
              fetchRecruitments={this.fetchRecruitments}
            />
          )}
          {displayToDoLists && <ToDoList history={history} />}
        </StyledContentWrapper>
      </StyledWrapper>
    );
  }
}

export default withRouter(User);
