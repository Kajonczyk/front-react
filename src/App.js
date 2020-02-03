import React from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import User from "./Pages/UserPage/User";
import GlobalStyle from "./Utils/GlobalStyle";
import theme from "./Utils/theme";
import { ThemeProvider } from "styled-components";
import { Router, Switch, Route } from "react-router-dom";
import history from "./Utils/history";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/user" render={() => <User />} />
            <Route exact path="/" render={() => <LoginPage />} />
            <Route render={() => <ErrorPage />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
