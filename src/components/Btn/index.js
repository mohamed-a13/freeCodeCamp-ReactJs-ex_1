import React from "react";

const Btn = ({ changeBackgroundColor, _background, newQuote, children }) => {
  return (
    <button onClick={changeBackgroundColor} style={_background} id={newQuote}>
      {children}
    </button>
  );
};

export default Btn;
