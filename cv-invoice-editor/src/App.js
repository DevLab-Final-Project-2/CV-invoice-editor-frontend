import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Home from "./components/Home";
import Invoice from './components/Invoice'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/invoice" component={Invoice} />
      </Switch>
    </Router>
  );
}

export default App;
