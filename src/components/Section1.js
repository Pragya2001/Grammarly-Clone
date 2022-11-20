import React, { useEffect, useState } from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import Button from "./helper/Button";
import "./Section1.css";
import fContent from "./helper/fContent";
import fImages from "./helper/fImages";

const Section1 = () => {
  const [slideCounter, setSlideCounter] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSlideCounter((counter) => {
        const updatedCounter = counter + 1;
        if (updatedCounter < 4) {
          return updatedCounter;
        } else {
          return 0;
        }
      });
    }, 7000);
    return () => {clearInterval(timer);
    }

  });

  return (
    <Section classList="section1">
      <Text classList="text--h1">Aim High With Brilliant Writing</Text>
      <Button link="https://www.grammarly.com/upgrade?utm_campaign=funnelPremiumAboveTheFold&utm_medium=internal&utm_source=funnel">Upgrade to Grammarly Premium</Button>
      <div className="sliderContent">
        <div className="container colsContainer twoCols">
          <div className="col col1">
            <fImages slideNum={slideCounter} />
          </div>
          <div className="col col2">
            <fContent slideNum={slideCounter} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section1;
