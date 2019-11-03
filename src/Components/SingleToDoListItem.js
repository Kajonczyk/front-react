import React, { Component } from "react";
import { SectionInfo } from "./Elements/SectionInfo";
import { StyledButton } from "../Shared/Button";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { addNewToDoListTask } from "../Fetches/AddNewToDoListTask";
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
  handleDeleteToDoList = () => {
    const toDoList = this.props.toDoLists;
    this.props.handleDeleteToDoList(toDoList);
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      taskInputValue: value
    });
  };

  handleAddNewTask = () => {
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

  handleDeleteListTask = payload => {
    this.props.handleDeleteListTask(payload, payload.id);
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
                <StyledButton onClick={() => this.handleAddNewTask()}>
                  Add task
                </StyledButton>
                <StyledTrashIcon onClick={() => this.handleDeleteToDoList()} />
              </StyledButtonWrapper>

              {this.props.toDoLists.length === 0 ? (
                <StyledDescription>You have no Tasks</StyledDescription>
              ) : (
                this.props.toDoLists.tasks.map(item => (
                  <StyledTaskDescription key={item.id}>
                    {item.description}
                    <StyledTrashIcon
                      onClick={() => this.handleDeleteTask(item)}
                    />
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
