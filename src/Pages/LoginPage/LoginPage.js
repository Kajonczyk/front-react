import React, { Component } from "react";
import RegisterForm from "../../Components/RegisterForm";
import LoginForm from "../../Components/LoginForm";
import { withRouter } from "react-router";
import {
  Wrapper,
  StyledH1,
  StyledGreetingDiv,
  StyledLoginWrapper
} from "./style";

class LoginPage extends Component {
  state = {
    isAccountCreated: false
  };

  switchForm = () => {
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
              switch={this.switchForm}
              active={this.state.isAccountCreated}
              history={this.props.history}
            />
          ) : (
            <RegisterForm switch={this.switchForm} />
          )}
        </StyledLoginWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(LoginPage);
