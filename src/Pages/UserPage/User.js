import React, { Component } from "react";
import CreateRecruitment from "../../Components/CreateRecruitment";
import ShowRecruitment from "../../Components/ShowRecruitment";
import ToDoList from "../../Components/ToDoList";
import { getRecruitmentFetch } from "../../Fetches/GetRecruitmentFetch";
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
    isRecruitmentBeingCreated: false,
    isRecruitmentBeingBrowsed: false,
    isRecruitmentArchiveBeingBrowsed: false,
    recruitments: [],
    isRecruitmentSuccessfullyDeleted: false,
    isRecruitmentSuccessfullyEdited: false
  };

  handleFetchRecruitments = async () => {
    try {
      const fetchResult = await getRecruitmentFetch();
      this.setState({
        recruitments: fetchResult
      });
    } catch (e) {
      this.props.history.push("/");
    }
  };
  handleUpdateRecruitments = recruitments => {
    this.setState({
      recruitments
    });
  };

  componentDidMount() {
    this.handleFetchRecruitments();
  }

  handleUpdateStateBasedOnPropertyName = actionType => {
    this.setState(prevState => ({
      [actionType]: !prevState[actionType]
    }));
  };
  handleChangeRecruitmentStatus = type => {
    const property = {
      delete: "isRecruitmentSuccessfullyDeleted",
      edit: "isRecruitmentSuccessfullyEdited"
    }[type];
    this.handleUpdateStateBasedOnPropertyName(property);
  };
  handleRecruitmentSectionStateUpdate = type => {
    const property = {
      add: "isRecruitmentBeingCreated",
      browse: "isRecruitmentBeingBrowsed",
      archive: "isRecruitmentArchiveBeingBrowsed"
    }[type];

    this.handleUpdateStateBasedOnPropertyName(property);
  };
  handleToggleRecruitmentSection = type => {
    switch (type) {
      case "add": {
        this.handleRecruitmentSectionStateUpdate("add");
        break;
      }
      case "browse": {
        this.handleRecruitmentSectionStateUpdate("browse");
        this.handleFetchRecruitments();

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
                isRecruitmentSuccessfullyEdited={
                  this.isRecruitmentSuccessfullyEdited
                }
                handleChangeEditRecruitmentStatus={
                  this.handleChangeRecruitmentStatus
                }
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
              <ShowRecruitment
                recruitments={this.state.recruitments}
                deleteRecruitmentStatus={
                  this.state.isRecruitmentSuccessfullyDeleted
                }
                handleChangeDeleteRecruitmentStatus={
                  this.handleChangeRecruitmentStatus
                }
                handleUpdateRecruitments={this.handleUpdateRecruitments}
                handleFetchRecruitments={this.handleFetchRecruitments}
              />
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
        <ToDoList history={this.props.history} />
      </StyledWrapper>
    );
  }
}

export default withRouter(User);
