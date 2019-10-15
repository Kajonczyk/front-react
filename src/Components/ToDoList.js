import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./StyledComponents/Input";
import StyledPlus from "./StyledComponents/StyledPlus";
import SectionInfo from "./StyledComponents/SectionInfo";
import { StyledButton } from "./StyledComponents/Button";
import { AddNewToDoList } from "./Fetches/AddNewToDoList";
import BrowseToDoList from "./BrowseToDoList";
const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.lightgreen};
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-weight: 100;
  width: 200px;
  margin: 20px auto;
`;
const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const StyledTaskWrapper = styled.div`
  width: 250px;
`;
const ToDoListInput = styled(StyledInput)`
  margin: 0px;
`;
class ToDoList extends Component {
  state = {
    isToDoListBeingCreated: false,
    toDoListName: ""
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      toDoListName: value
    });
  };
  handleSectionToggle = action => {
    switch (action) {
      case "addToDoList": {
        this.handleSectionStateToggler("addToDoList");
        break;
      }
      case "addTask": {
        this.handleRecruitmentSectionStateUpdate("addTask");
        break;
      }
      default: {
        break;
      }
    }
  };
  handleSectionStateToggler = action => {
    const property = {
      addToDoList: "isToDoListBeingCreated",
      addTask: "isTaskBeingCreated"
    }[action];
    this.setState(prevState => ({
      [property]: !prevState[property]
    }));
  };

  render() {
    return (
      <StyledWrapper>
        <StyledHeading>To Do List</StyledHeading>
        <StyledTaskWrapper>
          <SectionInfo>
            Add To Do List
            <StyledPlus
              onClick={() => this.handleSectionToggle("addToDoList")}
            />
          </SectionInfo>
          {this.state.isToDoListBeingCreated ? (
            <StyledDiv>
              <StyledDescription>To Do List Name</StyledDescription>
              <ToDoListInput
                value={this.state.toDoListName}
                onChange={this.handleChange}
              />
              <StyledButton
                onClick={() =>
                  AddNewToDoList(
                    this.state.toDoListName,
                    localStorage.getItem("token")
                  )
                }
              >
                Add new List
              </StyledButton>
            </StyledDiv>
          ) : null}
        </StyledTaskWrapper>
        <StyledHeading>Your Lists</StyledHeading>
        <BrowseToDoList />
      </StyledWrapper>
    );
  }
}

export default ToDoList;
