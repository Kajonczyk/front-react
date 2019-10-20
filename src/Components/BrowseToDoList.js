import React, { Component } from "react";
import { SectionInfo } from "./Elements/SectionInfo";
import { browseToDoLists } from "../Fetches/BrowseToDoLists";
import { StyledInput } from "./Elements/Input";
import { StyledButton } from "./Elements/Button";
import styled from "styled-components";
import { StyledKeyboardArrowDownIcon } from "./Elements/StyledArrowIcon";
import { addNewToDoListTask } from "../Fetches/AddNewToDoListTask";
import { StyledTrashIcon } from "./Elements/StyledTrashIcon";
import { deleteToDoListTask } from "../Fetches/DeleteToDoListTask";
import { deleteToDoList } from "../Fetches/DeleteToDoList";
import { validateAddTask } from "./Validator";
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledTaskWrapper = styled(StyledWrapper)`
  width: 250px;
`;
const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
  margin: 30px 0px 10px;
`;
const TaskInput = styled(StyledInput)`
  margin: 0px;
`;
const StyledTaskDescription = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  padding: 15px 15px 15px 0px;
  margin: 15px;
  width: 250px;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.taskMobileDescription};
  display: flex;
  justify-content: space-between;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
class BrowseToDoList extends Component {
  state = {
    toDoLists: [],
    toDoListsInputValue: []
  };
  async getToDoListsFromApi() {
    const toDoLists = await browseToDoLists(localStorage.getItem("token"));
    this.setState({
      toDoLists
    });
    let toDoListsInputValue = toDoLists.map(item => [
      ...this.state.toDoListsInputValue,
      { value: "" }
    ]);
    toDoListsInputValue = toDoListsInputValue.flatMap(item => item);
    this.setState({
      toDoListsInputValue
    });
  }
  setSectionExpansion = array => {
    this.setState({
      toDoLists: array
    });
  };
  handleDeleteToDoList = item => {
    deleteToDoList(item);
  };
  componentDidMount() {
    this.getToDoListsFromApi();
  }
  handleChange = (e, id) => {
    const { value } = e.target;
    const currentItem = this.state.toDoListsInputValue[id];
    currentItem.value = value;
  };

  handleAddNewTask = id => {
    const obj = {
      description: this.state.toDoListsInputValue[id].value,
      todoListId: id + 1
    };
    const validationError = validateAddTask(obj.description);
    if (!validationError) {
      addNewToDoListTask(obj);
    }
  };
  handleDeleteTask = (payload, id) => {
    deleteToDoListTask(payload, id);
  };
  render() {
    const { toDoLists } = this.state;
    const toDoListArrayCopy = [...toDoLists];
    return (
      <div>
        {toDoLists.length === 0 ? (
          <p>You have no lists</p>
        ) : (
          toDoListArrayCopy.map((item, id) => (
            <StyledTaskWrapper key={id}>
              <SectionInfo>
                {item.id} {item.name}
                <StyledKeyboardArrowDownIcon
                  onClick={() => {
                    item.isExpanded = !item.isExpanded;
                    this.setSectionExpansion(toDoListArrayCopy);
                  }}
                />
              </SectionInfo>

              {item.isExpanded ? (
                <StyledWrapper>
                  <StyledDescription>Add Task</StyledDescription>
                  <TaskInput onChange={e => this.handleChange(e, id)} />
                  <StyledButtonWrapper>
                    <StyledButton onClick={() => this.handleAddNewTask(id)}>
                      Add task
                    </StyledButton>

                    <StyledTrashIcon
                      onClick={() => this.handleDeleteToDoList(item)}
                    />
                  </StyledButtonWrapper>

                  {item.tasks.length === 0 ? null : (
                    <StyledDescription>Tasks</StyledDescription>
                  )}
                  {item.tasks.map(item => (
                    <StyledTaskDescription key={item.id}>
                      {item.description}
                      <StyledTrashIcon
                        onClick={() => this.handleDeleteTask(item, item.id)}
                      />
                    </StyledTaskDescription>
                  ))}
                </StyledWrapper>
              ) : null}
            </StyledTaskWrapper>
          ))
        )}
      </div>
    );
  }
}

export default BrowseToDoList;
