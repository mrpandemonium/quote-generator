import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote({
          text: data.content,
          author: data.author,
        });
      });
  };
  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <button id="new-quote" onClick={getQuote}>
          New Quote
        </button>
        <a
          href={"http://twitter.com/intent/tweet" + quote.text}
          id="tweet-quote"
        >
          Post to Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
