// import React, { useState } from "react";

function LightSwitchButton(props) {
  const {light, switchLight} = props;
  const handleClick = () => switchLight();

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {/* conditional rendering: light is on or off */}
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;