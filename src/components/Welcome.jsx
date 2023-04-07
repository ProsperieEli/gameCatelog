import React from "react";
import introText from "./IntroText";

export default function Welcome() {
  return (
    <>
      <div>
        <p>{introText}</p>
      </div>
      <button onClick={() => console.log("closer")}>Let's get started</button>
    </>
  );
}
