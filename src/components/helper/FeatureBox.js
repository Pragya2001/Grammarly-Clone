import React from "react";
import "./FeatureBox.css";
import Text from "./Text";
import Button from "./Button";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'

const FeatureBox = (props) => {
  return (
    <div className={"featureBox " + props.classList}>
      <Text classList="text--tiny">{props.tinyText}</Text>
      <Text classList="text--h3">{props.h3}</Text>
      <Text classList="text--medium">{props.desc}</Text>
      <Button link={props.buttonText.link} classList={props.buttonText.classList}>{props.buttonText.text}</Button>
      <ul>
        {props.features.map((feature, index) => {
          return <li key={index}>
          <Tippy className="tippy" placement='bottom' content={<image>{feature.image}</image>}>
          <span>{feature.text}</span>
          </Tippy>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default FeatureBox;
