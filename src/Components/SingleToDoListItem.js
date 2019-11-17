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
  StyledButtonWrapper
} from "../Styles/SingleToDoListItemStyle";

class SingleToDoListItem extends Component {
  state = {
    taskInputValue: "",
    isTaskSectionExpanded: false,
    tasks: []
  };

  toggleCreateTaskSection = () => {
    this.setState(prevState => ({
      isTaskSectionExpanded: !prevState.isTaskSectionExpanded
    }));
  };
  deleteToDoList = () => {
    const toDoList = this.props.toDoLists;
    this.props.deleteToDoList(toDoList);
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      taskInputValue: value
    });
  };

  addNewTask = () => {
    const { taskInputValue } = this.state;
    const fetchObjectPayload = {
      description: taskInputValue,
      todoListId: this.props.toDoLists.id
    };
    const validationError = validateAddTask(fetchObjectPayload.description);
    if (!validationError) {
      addNewToDoListTask(fetchObjectPayload);
    }
  };

  deleteTask = payload => {
    this.props.deleteTask(payload, payload.id);
  };
  render() {
    const { isTaskSectionExpanded } = this.state;
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
              <TaskInput onChange={this.handleChange} />
              <StyledButtonWrapper>
                <StyledButton onClick={() => this.addNewTask()}>
                  Add task
                </StyledButton>
                <StyledTrashIcon onClick={() => this.deleteToDoList()} />
              </StyledButtonWrapper>

              {this.props.toDoLists.length === 0 ? (
                <StyledDescription>You have no Tasks</StyledDescription>
              ) : (
                this.props.toDoLists.tasks.map(item => (
                  <StyledTaskDescription key={item.id}>
                    {item.description}
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
