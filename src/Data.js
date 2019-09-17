import React, { Component } from "react";
import styled from "styled-components";

const Styled = styled.div`
  background-color: ${({ theme }) => theme.green3};
  height: 50vh;
`;
const Styled2 = styled.div`
  background-color: ${({ theme }) => theme.lightgreen};
  height: 50vh;
`;
class Data extends Component {
  state = {
    data: ""
  };
  componentDidMount() {
    fetch("http://localhost:5001/api/recruitment", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMiLCJuYmYiOjE1Njg3MTk1MDEsImV4cCI6MTU2ODg5MjMwMSwiaWF0IjoxNTY4NzE5NTAxfQ.zo29C4_P0u7ALF8afrwRpla3cOCCV4jz-538yjR2wRE",
        "Content-Type": "application/json"
      }
    }).then(response => console.log(response.status));
    setTimeout(() => console.log(this.state.data), 500);
  }
  render() {
    return (
      <>
        <Styled>
          <div>Test</div>
        </Styled>
        <Styled2 />
      </>
    );
  }
}

export default Data;
