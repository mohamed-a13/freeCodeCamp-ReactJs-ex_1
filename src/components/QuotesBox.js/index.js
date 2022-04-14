import React, { useState, useEffect } from "react";
import axios from "axios";
import Btn from "../Btn";
import BtnAncre from "../BtnAncre";

const QuotesBox = () => {
  const [changeColor, setChangeColor] = useState("#16a085");
  const [author, setAuthor] = useState("Kevin Kruse");
  const [quote, setQuote] = useState(
    "Life isn’t about getting and having, it’s about giving and being."
  );
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const colorText = {
    color: changeColor,
  };

  const background = {
    backgroundColor: changeColor,
  };

  const fontS = {
    fontSize: "24px",
  };

  const changeBackgroundColor = async () => {
    await axios
      .get(
        `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      )
      .then((res) => {
        /* console.log('Ok: ', res.data.quotes[0]) */
        let pos = Math.floor(Math.random() * res.data.quotes.length);
        setQuote(res.data.quotes[pos].quote);
        setAuthor(res.data.quotes[pos].author);

        let posColor = Math.floor(Math.random() * colors.length);
        setChangeColor(colors[posColor]);
        document.body.style.backgroundColor = colors[posColor];
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    changeBackgroundColor();
  }, []);

  return (
    <div id="quote-box" style={colorText}>
      <div id="div-text">
        <h2 id="text">
          <span>&#x275D;</span>
          {quote}
          <span>&#x275E;</span>
        </h2>
      </div>
      <div id="div-author">
        <p id="author">- {author}</p>
      </div>
      <div id="div-btns">
        <div id="div-rs">
          <BtnAncre
            _href="https://twitter.com/i/flow/signup"
            _background={background}
            tweetQuote="tweet-quote"
          >
            <i class="fa fa-twitter"></i>
          </BtnAncre>
          <BtnAncre
            _href="https://www.tumblr.com/register"
            _background={background}
            tweetQuote="tumblr-quote"
          >
            <i class="fa fa-tumblr"></i>
          </BtnAncre>
        </div>
        <Btn
          changeBackgroundColor={changeBackgroundColor}
          _background={background}
          newQuote="new-quote"
        >
          New quote
        </Btn>
      </div>
    </div>
  );
};

export default QuotesBox;
