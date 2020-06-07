import React from "react";
import NavBar from "./NavBar";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
