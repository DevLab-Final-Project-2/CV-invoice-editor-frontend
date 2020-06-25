import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Home from "./components/Home";
import Invoice from './components/Invoice'
import CV from './components/cv-editor/cv'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NoPage from './components/NoPage'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/invoice-editor" component={Invoice} />
        <Route path="/cv-editor" component={CV} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/404" component={NoPage} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
