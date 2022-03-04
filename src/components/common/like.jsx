import React, { Component } from "react";

class Like extends React.Component {
  render() {
    return (
      <div>
        <i onClick={this.handleLike} className={this.getHeartClass()}></i>
      </div>
    );
  }
}

export default Like;
