import React from "react";
import "./AList.css";
import Text from "./Text";

const AList = (props) => {
  return (
    <li className={"atfLi " + props.active}>
      <Text classList="text--h5">{props.h5}</Text>
      <Text classList="text--tiny">{props.tiny}</Text>
      <div className="progressBar">
        <span></span>
      </div>
    </li>
  );
};

export default AList;
