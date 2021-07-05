import React, { Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Later from "./Components/Later";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/later">
              <Later />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
