import React from "react";
<<<<<<< HEAD
import LoginPage from "./Components/LoginPage";
import User from "./Components/User";
=======
import LoginPage from "./Pages/LoginPage/LoginPage";
import User from "./Pages/UserPage/User";
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5
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
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
