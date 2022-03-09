import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();

    window.location = "/"; // 整个页面重载，app会重新 mount
  }

  render() {
    return null;
  }
}

export default Logout;
