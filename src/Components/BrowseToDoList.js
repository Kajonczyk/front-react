import React, { Component } from "react";
import SectionInfo from "./StyledComponents/SectionInfo";
import BrowseToDoLists from "./Fetches/BrowseToDoLists";
import { StyledInput } from "./StyledComponents/Input";
import { StyledButton } from "./StyledComponents/Button";
import styled from "styled-components";
import StyledKeyboardArrowDown from "./StyledComponents/StyledArrow";
import * as AddNewToDoListTask from "./Fetches/AddNewToDoListTask";
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
  margin-top: 20px;
`;
const TaskInput = styled(StyledInput)`
  margin: 0px;
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
  componentDidMount() {
    this.getToDoListsFromApi();
  }
  handleChange = (e, id) => {
    const { value } = e.target;
    const currentItem = this.state.toDoListsInputValue[id];
    currentItem.value = value;

    this.setState({
      [currentItem]: currentItem
    });
  };
  handleAddNewTask = id => {
    const obj = {
      description: this.state.toDoListsInputValue[id].value,
      todoListId: id + 1
    };
    AddNewToDoListTask.AddNewToDoListTask(obj, localStorage.getItem("token"));
  };
  render() {
    const { toDoLists } = this.state;
    return (
      <div>
        {toDoLists.map((item, id) => (
          <StyledWrapper key={id}>
            <SectionInfo>
              {item.id} {item.name}
              <StyledKeyboardArrowDown onClick={() => console.log(id)} />
            </SectionInfo>
            <StyledDescription>Add Task</StyledDescription>
            <TaskInput onChange={e => this.handleChange(e, id)} taskId={id} />
            <StyledButton onClick={() => this.handleAddNewTask(id)}>
              Add task
            </StyledButton>
          </StyledWrapper>
        ))}
      </div>
    );
  }
}

export default BrowseToDoList;
