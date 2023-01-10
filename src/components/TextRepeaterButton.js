import React, { useState } from "react";


function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState();
  //...
  
  // Loop textArray - stores as many span elements based on the value of repetitions
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  }
  // Place array in the JSX to show span elements inside the button
  return (
    <button onClick={handleClick} className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;