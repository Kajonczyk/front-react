import React, { Component } from "react";
import { StyledPlusIcon } from "./Elements/StyledPlusIcon";
import { SectionInfo } from "./Elements/SectionInfo";
import { StyledButton } from "../Shared/Button";
import { addNewToDoList } from "../Fetches/ToDoLists/AddNewToDoList";
import SingleToDoListItem from "./SingleToDoListItem";
import { browseToDoLists } from "../Fetches/ToDoLists/BrowseToDoLists";
import { deleteToDoListTask } from "../Fetches/ToDoLists/DeleteToDoListTask";
import { deleteToDoList } from "../Fetches/ToDoLists/DeleteToDoList";

import {
  StyledWrapper,
  StyledHeading,
  StyledDescription,
  StyledDiv,
  StyledTaskWrapper,
  ToDoListInput
} from "../Styles/ToDoListStyle";

class ToDoList extends Component {
  state = {
    isListCreationFormDisplayed: false,
    toDoListName: "",
    toDoLists: []
  };
  componentDidMount() {
    this.getToDoListsFromApi();
  }
  async getToDoListsFromApi() {
    try {
      const toDoLists = await browseToDoLists();
      this.setState({
        toDoLists
      });
    } catch (e) {
      this.props.history.push("/");
    }
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      toDoListName: value
    });
  };

  toggleCreateListSection = () => {
    this.setState(prevState => ({
      isListCreationFormDisplayed: !prevState.isListCreationFormDisplayed
    }));
  };
  updateToDoListArray = async () => {
    const updateToDoListInfo = await browseToDoLists();
    this.setState({
      toDoLists: updateToDoListInfo
    });
  };
  deleteTask = payload => {
    deleteToDoListTask(payload, payload.id);
    this.updateToDoListArray();
  };
  deleteToDoList = async payload => {
    deleteToDoList(payload);
    await this.updateToDoListArray();
  };
  render() {
    const { toDoLists } = this.state;
    return (
      <StyledWrapper>
        <StyledHeading>To Do List</StyledHeading>
        <StyledTaskWrapper>
          <SectionInfo>
            Add To Do List
            <StyledPlusIcon onClick={() => this.toggleCreateListSection()} />
          </SectionInfo>
          {this.state.isListCreationFormDisplayed ? (
            <StyledDiv>
              <StyledDescription>To Do List Name</StyledDescription>
              <ToDoListInput
                value={this.state.toDoListName}
                onChange={this.handleChange}
              />
              <StyledButton
                onClick={() => addNewToDoList(this.state.toDoListName)}
              >
                Add new List
              </StyledButton>
            </StyledDiv>
          ) : null}
        </StyledTaskWrapper>
        <StyledHeading>Your Lists</StyledHeading>
        {toDoLists.map(item => (
          <SingleToDoListItem
            toDoLists={item}
            deleteTask={this.deleteTask}
            deleteToDoList={this.deleteToDoList}
          />
        ))}
      </StyledWrapper>
    );
  }
}

export default ToDoList;
