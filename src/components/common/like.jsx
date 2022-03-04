import React, { Component } from "react";

// input: liked(boolean)
// output: onclick

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <div>
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    </div>
  );
};

export default Like;
