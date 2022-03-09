import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token"); // 删除 JWT
    window.location = "/"; // 整个页面重载，app会重新 mount
  }

  render() {
    return null;
  }
}

export default Logout;
