import React, { Component } from "react";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router";
const Wrapper = styled.div`
  background-image: linear-gradient(0deg, #093028, #237a57);
  min-height: 100vh;
`;
const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;

  &::after {
    content: "JUNIOR";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.055;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 5);
  }
`;

const StyledGreetingDiv = styled.div`
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLoginWrapper = styled.div`
  height: 500px;
  padding: 20px;
`;

class LoginPage extends Component {
  state = {
    isAccountCreated: false
  };

  handleSwitchForm = () => {
    this.setState({
      isAccountCreated: !this.state.isAccountCreated
    });
  };
  componentDidMount() {
    localStorage.removeItem("token");
  }
  render() {
    return (
      <Wrapper>
        <StyledGreetingDiv>
          <StyledH1>Junior Start</StyledH1>
        </StyledGreetingDiv>
        <StyledLoginWrapper>
          {this.state.isAccountCreated ? (
            <LoginForm
              switch={this.handleSwitchForm}
              active={this.state.isAccountCreated}
              history={this.props.history}
            />
          ) : (
            <RegisterForm switch={this.handleSwitchForm} />
          )}
        </StyledLoginWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(LoginPage);
