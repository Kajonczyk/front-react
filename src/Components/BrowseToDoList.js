import React, { Component } from "react";
import SectionInfo from "./StyledComponents/SectionInfo";
import BrowseToDoLists from "./Fetches/BrowseToDoLists";
import { StyledInput } from "./StyledComponents/Input";
import { StyledButton } from "./StyledComponents/Button";
import styled from "styled-components";
import StyledKeyboardArrowDown from "./StyledComponents/StyledArrow";
import * as AddNewToDoListTask from "./Fetches/AddNewToDoListTask";
import StyledTrash from "./StyledComponents/StyledTrash";
import DeleteToDoListTask from "./Fetches/DeleteToDoListTask";
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
  margin-top: 30px;
  margin-bottom: 10px;
`;
const TaskInput = styled(StyledInput)`
  margin: 0px;
`;
const StyledTaskDescription = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  padding: 15px;
  padding-left: 0px;
  margin: 15px;
  width: 250px;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.taskMobileDescription};
  display: flex;
  justify-content: space-between;
`;

class BrowseToDoList extends Component {
  state = {
    toDoLists: [],
    toDoListsInputValue: []
  };
  async getToDoListsFromApi() {
    const toDoLists = await BrowseToDoLists(localStorage.getItem("token"));
    this.setState({
      toDoLists
    });
    toDoLists.forEach(item =>
      this.setState({
        toDoListsInputValue: [...this.state.toDoListsInputValue, { value: "" }]
      })
    );
  }
  setSectionExpansion = array => {
    this.setState({
      toDoLists: array
    });
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
    const token = localStorage.getItem("token");
    AddNewToDoListTask.AddNewToDoListTask(obj, token);
  };
  handleDeleteTask = (payload, id) => {
    const token = localStorage.getItem("token");
    DeleteToDoListTask(payload, token, id);
  };
  render() {
    const { toDoLists } = this.state;
    const toDoListArrayCopy = [...toDoLists];
    return (
      <div>
        {toDoListArrayCopy.map((item, id) => (
          <StyledTaskWrapper key={id}>
            <SectionInfo>
              {item.id} {item.name}
              <StyledKeyboardArrowDown
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
                <StyledButton onClick={() => this.handleAddNewTask(id)}>
                  Add task
                </StyledButton>
                <StyledDescription>Tasks</StyledDescription>
                {item.tasks.map(item => (
                  <StyledTaskDescription key={item.id}>
                    {item.description}
                    <StyledTrash
                      onClick={() => this.handleDeleteTask(item, item.id)}
                    />
                  </StyledTaskDescription>
                ))}
              </StyledWrapper>
            ) : null}
          </StyledTaskWrapper>
        ))}
      </div>
    );
  }
}

export default BrowseToDoList;
