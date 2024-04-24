import React, { useState } from "react";

export default function TextForm(props) {
  const uppercase = () => {
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
};
const lowercase = () => {
    // console.log("Lowercase was clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
};
const clear = () => {
    // console.log("Lowercase was clicked");
    setText("");
    props.showAlert("Cleared Text", "success");
  };
const copy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copied", "success");
  };
const removespace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Removed", "success");
  };
  const handleonChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <div className="container my-3">
      <h1 className={`text-${props.mode === "light" ? "dark" : "light"} mb-4`}>
        {props.heading}
      </h1>
      <div className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <textarea
          className={`form-control bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          id="myBox"
          value={text}
          onChange={handleonChange}
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={uppercase}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={lowercase}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary" onClick={clear}>
        Clear Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary" onClick={removespace}>
        Remove Space
      </button>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes needed to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in above box to preview it here"}
        </p>
      </div>
    </div>
  );
}
