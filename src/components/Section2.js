import React from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import "./Section2.css";
import FeatureBox from "./helper/FeatureBox";

const Section2 = () => {
  return (
    <Section classList="section2">
      <Text classList="text--h2">Up-Level Your Communication</Text>
      <Text classList="text--h5">
        Unlock Grammarly Premium’s advanced features and suggestions.
      </Text>
      <div className="colsContainer twoCols">
        <div className="col col1">
          <FeatureBox
            classList="featureBox1"
            tinyText="FOR CASUAL WRITING"
            h3="Free"
            desc="Basic writing suggestions."
            buttonText={{ text: "Current Plan", classList: "disabled", link:"#" }}
            features={[
              {text:"Spelling", image: "Eliminate spelling errors."},
              {text:"Grammar", image: "Eliminate grammatical errors."},
              {text:"Punctuation", image: "Eliminate punctuation errors."},
              {text:"Conciseness", image: "Make every sentence concise and easy to follow."}
            ]}
             
          />
        </div>
        <div className="col col2">
          <FeatureBox
            classList="featureBox2"
            tinyText="FOR WORK OR SCHOOL"
            h3="Premium"
            desc="Style, tone, and clarity improvements for writing at work and school."
            buttonText={{ text: "Upgrade to Grammarly Premium", classList: "", link:"https://www.grammarly.com/upgrade?utm_campaign=funnelPremiumAboveTheFold&utm_medium=internal&utm_source=funnel" }}
            features={[
              {text:"Everything in Free", image: ""},
              {text:"Clarity-focused sentence rewrites", image: "Automatically rewrite hard-to-read sentences."},
              {text:"Tone adjustments",image: "Eliminate hedging language or unnecessary qualifiers to sound more confident."},
              {text:"Plagiarism detection", image: "Ensure your work is fresh and original by checking it against 16 billion web pages."},
              {text:"Word choice", image: "Find vivid words to enliven each and every message."},
              {text:"Formality level", image: "Write with the appropriate tone, even when you're in a hurry."},
              {text:"Fluency", image: "Ensure your word choices sound natural and fluent."},
              {text:"Additional advanced suggestions", image: "Fix inconsistencies in spelling and punctuation, adjust the tone of your writing, and get additional advanced feedback."} 
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default Section2;
