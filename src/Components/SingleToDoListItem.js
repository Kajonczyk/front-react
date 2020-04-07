import React, { Component } from "react";
import { SectionInfo } from "./Elements/SectionInfo";
import { StyledButton } from "../Shared/Button";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { addNewToDoListTask } from "../Fetches/ToDoLists/AddNewToDoListTask";
import { StyledTrashIcon } from "./Elements/StyledTrashIcon";
import { validateAddTask } from "./Validator";

import {
  StyledWrapper,
  StyledTaskWrapper,
  TaskInput,
  StyledDescription,
  StyledTaskDescription,
  StyledButtonWrapper,
  StyledSpan,
} from "../Styles/SingleToDoListItemStyle";

class SingleToDoListItem extends Component {
  state = {
    taskInputValue: "",
    isTaskSectionExpanded: false,
    tasks: [],
    inputFieldError: false,
  };

  toggleCreateTaskSection = () => {
    this.setState((prevState) => ({
      isTaskSectionExpanded: !prevState.isTaskSectionExpanded,
    }));
  };
  deleteList = async () => {
    const toDoList = this.props.toDoLists;
    await this.props.deleteToDoList(toDoList);
  };
  setInputValue = (value) => {
    this.setState({
      taskInputValue: "",
    });
  };
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      taskInputValue: value,
    });
  };
  toggleError = (value) => {
    this.setState({
      inputFieldError: value,
    });
  };
  cleanInputField = () => {
    this.setState({
      taskInputValue: "",
    });
    this.toggleError(false);
  };
  addNewTask = async () => {
    const { taskInputValue } = this.state;
    const fetchObjectPayload = {
      description: taskInputValue,
      todoListId: this.props.toDoLists.id,
    };

    const validationError = validateAddTask(fetchObjectPayload.description);
    if (!validationError) {
      await addNewToDoListTask(fetchObjectPayload);
      this.cleanInputField();
      await this.props.updateLists();
    } else {
      this.toggleError(true);
    }
  };

  deleteTask = async (payload) => {
    await this.props.deleteTask(payload, payload.id);
    await this.props.updateLists();
  };
  render() {
    const {
      isTaskSectionExpanded,
      inputFieldError,
      taskInputValue,
    } = this.state;
    const { id, name } = this.props.toDoLists;
    return (
      <div>
        <StyledTaskWrapper>
          <SectionInfo>
            {id} {name}
            <StyledKeyboardArrowDownIcon
              onClick={() => {
                this.toggleCreateTaskSection();
              }}
            />
          </SectionInfo>
          {isTaskSectionExpanded && (
            <StyledWrapper>
              <StyledDescription>Add Task</StyledDescription>
              <TaskInput
                onChange={this.handleChange}
                value={taskInputValue}
                placeholder="Task description..."
              />
              {inputFieldError && (
                <StyledDescription error>Name is too short!</StyledDescription>
              )}
              <StyledButtonWrapper>
                <StyledButton onClick={() => this.addNewTask()}>
                  Add task
                </StyledButton>

                <StyledTrashIcon onClick={() => this.deleteList()} />
              </StyledButtonWrapper>

              {this.props.toDoLists.length === 0 ? (
                <StyledDescription>You have no Tasks</StyledDescription>
              ) : (
                this.props.toDoLists.tasks.map((item) => (
                  <StyledTaskDescription key={item.id}>
                    <StyledSpan>{item.description}</StyledSpan>
                    <StyledTrashIcon onClick={() => this.deleteTask(item)} />
                  </StyledTaskDescription>
                ))
              )}
            </StyledWrapper>
          )}
        </StyledTaskWrapper>
      </div>
    );
  }
}

export default SingleToDoListItem;
