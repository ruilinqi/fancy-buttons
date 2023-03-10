import React, { useState } from "react";



function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState();
  //...
  const handleClick = () => {
    setClickAmount(clickAmount + 1);
  }

  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;