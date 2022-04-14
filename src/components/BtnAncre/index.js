import React from "react";

const BtnAncre = ({ _background, _href, tweetQuote, children }) => {
  return (
    <a
      style={_background}
      href={_href}
      id={tweetQuote}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default BtnAncre;
