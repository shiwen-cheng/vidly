import React from "react";

// input: liked(boolean)
// output: onclick

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <div>
      <i
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    </div>
  );
};

export default Like;
