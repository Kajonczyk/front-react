import React, { Component } from "react";
import { StyledPlusIcon } from "./Elements/StyledPlusIcon";
import { SectionInfo } from "./Elements/SectionInfo";
import { StyledButton } from "../Shared/Button";
import { addNewToDoList } from "../Fetches/AddNewToDoList";
import SingleToDoListItem from "./SingleToDoListItem";
import { browseToDoLists } from "../Fetches/BrowseToDoLists";
import { deleteToDoListTask } from "../Fetches/DeleteToDoListTask";
import { deleteToDoList } from "../Fetches/DeleteToDoList";

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
      const toDoLists = await browseToDoLists(localStorage.getItem("token"));
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
  handleUpdateToDoListArray = async () => {
    const token = localStorage.getItem("token");
    const updateToDoListInfo = await browseToDoLists(token);
    this.setState({
      toDoLists: updateToDoListInfo
    });
  };
  handleDeleteListTask = payload => {
    deleteToDoListTask(payload, payload.id);
    this.handleUpdateToDoListArray();
  };
  handleDeleteToDoList = async payload => {
    deleteToDoList(payload);
    await this.handleUpdateToDoListArray();
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
                onClick={() =>
                  addNewToDoList(
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
        {toDoLists.map(item => (
          <SingleToDoListItem
            toDoLists={item}
            handleDeleteListTask={this.handleDeleteListTask}
            handleDeleteToDoList={this.handleDeleteToDoList}
          />
        ))}
      </StyledWrapper>
    );
  }
}

export default ToDoList;
