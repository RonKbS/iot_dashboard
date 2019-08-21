import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "./layout/Header";
import Signin from "./SignIn";
import Register from "./Register";
// import PrivateRoute from "../components/utilities";

import { Provider } from "react-redux";
import store from "../store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <Switch>
              <Route exact path="/" component={Header} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/signin" component={Signin} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
