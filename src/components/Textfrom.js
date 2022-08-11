import React, { useState } from "react";

export default function Textfrom(props) {
  // const a =text.split(" ").length;
  const handleUP = () => {
    // console.log("Uppercase was clicked"+text)
    let newText = text.toUpperCase();

    setText(newText);
    props.show("Converted to Upper case","primary")
  };
  const handlelow = () => {
    // console.log("lowercsae was clicked"+text)
    let newText = text.toLowerCase();

    setText(newText);
    props.show("Converted to Lower case","primary")

  };
  const clear = () => {
    setText("");
    props.show("Clear SuccessFull","danger")

  };
  const hand = (event) => {
    // console.log("Uppercas")
    setText(event.target.value);

  };

  //copy
  const handelcopy = () => {
    var fix = document.getElementById("myBox");
    fix.select();
    fix.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(fix.value);
    props.show("Copied..!!","warning")

  };

  //handel extra spaces
  const handelextra = () => {
    let newTEXT = text.split(/[ ]+/);
    setText(newTEXT.join(" "));
    props.show("Removed Extra space Successfully","success")

  };

  const [text, setText] = useState("");
  // setText("kdslsd");
  // text ="new text "; wrong way to change the state
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="form-group">
          {/* <label for="exampleFormControlTextarea1">{props.heading}</label> */}
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={hand}
            style={{
              backgroundColor: props.mode === "dark" ? "black":'white',
              color: props.mode === "dark" ? "white":'black',
            //  if===statisfied?(then)this :(or)that
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          onClick={handleUP}
          className={`btn btn-${props.b}primary mx-1 my-1`}
        >
          Convert To Upper Case
        </button>
        <button
          onClick={handlelow}
          className={`btn btn-${props.b}primary mx-1 my-1`}
        >
          Convert To Lower Case
        </button>
        <button
          onClick={clear}
          className={`btn btn-${props.b}danger mx-1 my-1`}
        >
          Clear
        </button>
        <button
          onClick={handelcopy}
          className={`btn btn-${props.b}warning mx-1 my-1`}
        >
          Copy
        </button>
        <button
          onClick={handelextra}
          className={`btn btn-${props.b}success mx-1 my-1`}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
