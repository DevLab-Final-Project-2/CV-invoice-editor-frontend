import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AuthenticatedComponent from "./AuthenticatedComponent";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
