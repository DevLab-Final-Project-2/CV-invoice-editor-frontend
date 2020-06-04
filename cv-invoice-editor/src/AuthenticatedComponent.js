import React from "react";

class AuthenticatedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }
  render() {
    return <div>hello</div>;
  }
}

export default AuthenticatedComponent;
