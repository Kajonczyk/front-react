import React, { Component } from "react";
import { StatusMessage } from "./StatusMessage";
import { StyledButton } from "../Shared/Button";
import { addNewToDoList } from "../Fetches/ToDoLists/AddNewToDoList";
import SingleToDoListItem from "./SingleToDoListItem";
import { browseToDoLists } from "../Fetches/ToDoLists/BrowseToDoLists";
import { deleteToDoListTask } from "../Fetches/ToDoLists/DeleteToDoListTask";
import { deleteToDoList } from "../Fetches/ToDoLists/DeleteToDoList";
import history from "../Utils/history";

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
    toDoListName: "",
    toDoLists: [],
    isPopUpDisplayed: false,
    errors: {
      listName: false
    }
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
      history.push("/");
    }
  }

  clearInputField = () => {
    this.setState({
      toDoListName: ""
    });
    this.cleanInputErrors();
  };

  cleanInputErrors = () => {
    this.setState({
      errors: {
        listName: false
      }
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      toDoListName: value
    });
  };

  togglePopUp = () => {
    this.setState(prevState => ({
      isPopUpDisplayed: !prevState.isPopUpDisplayed
    }));
  };

  validateInput = () => {
    const { toDoListName } = this.state;
    return toDoListName.length > 2;
  };

  handleSubmit = async item => {
    if (this.validateInput()) {
      await addNewToDoList(item);
      this.clearInputField();
      this.togglePopUp();
      await this.getToDoListsFromApi();
    } else {
      this.setState({
        errors: {
          listName: true
        }
      });
    }
  };

  updateToDoListArray = async () => {
    const updateToDoListInfo = await browseToDoLists();
    this.setState({
      toDoLists: updateToDoListInfo
    });
  };

  deleteTask = async payload => {
    await deleteToDoListTask(payload, payload.id);
    await this.updateToDoListArray();
  };

  deleteToDoList = async payload => {
    await deleteToDoList(payload);
    await this.updateToDoListArray();
  };

  render() {
    const {
      toDoLists,
      isPopUpDisplayed,
      errors: { listName }
    } = this.state;
    return (
      <StyledWrapper>
        <StyledTaskWrapper>
          <>
            <StyledDiv>
              <StyledDescription>To Do List Name</StyledDescription>
              <ToDoListInput
                value={this.state.toDoListName}
                onChange={this.handleChange}
                placeholder="Name..."
              />
              {listName && (
                <StyledDescription error>Name is too short!</StyledDescription>
              )}
              <StyledButton
                onClick={() => this.handleSubmit(this.state.toDoListName)}
              >
                Add new List
              </StyledButton>
            </StyledDiv>
            <StyledHeading>Your Lists</StyledHeading>
            {toDoLists.length > 0 ? (
              toDoLists.map(item => (
                <SingleToDoListItem
                  toDoLists={item}
                  deleteTask={this.deleteTask}
                  deleteToDoList={this.deleteToDoList}
                  updateLists={async () => await this.getToDoListsFromApi()}
                />
              ))
            ) : (
              <StyledDescription emptyLists={true}>
                You have no lists
              </StyledDescription>
            )}
          </>
        </StyledTaskWrapper>

        {isPopUpDisplayed && (
          <StatusMessage
            descriptionText="List successfully added"
            closeAction={this.togglePopUp}
          />
        )}
      </StyledWrapper>
    );
  }
}

export default ToDoList;
