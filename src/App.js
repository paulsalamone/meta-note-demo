import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import nlp from "compromise";
import cleaner from "./functions/cleaner.js";
export default function App() {
  const [text, setText] = useState();
  const [nounCount, setNounCount] = useState(0);
  const [nounArray, setNounArray] = useState([]);
  const [cleanArray, setCleanArray] = useState([]);



  const submitHandler = (e) => {
    e.preventDefault();
    setNounArray(nlp(text).nouns().out().split(" "));
    console.log(cleaner(nounArray));
  };

  useEffect(() => {
    for (let i = 0; i < nounArray.length; i++) {
      setNounCount(nounCount + 1);
      // console.log(nounCount);
      // console.log(i + "noun!");
    }
  }, [nounArray]);

  return (
    <div className="App">
      <h1>Meta-Note</h1>
      <main>
        <form onSubmit={submitHandler}>
          <button type="submit">analyze note</button>
          <br />
          <textarea
            placeholder="type here"
            rows="30"
            cols="50"
            id="text-input"
            name="textInput"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </form>
        <div>
          <h2>Analysis:</h2>
          <h3># of nouns: {nounArray.length}</h3>
          {nounArray.map((e, index) => {
            return <p key={index}>{e}</p>;
          })}
        </div>
      </main>
    </div>
  );
}
