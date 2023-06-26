import React, { useState } from 'react'




export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoclick = () => {
    console.log("Lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleClearClick = () => {

    let newText = '';
    setText(newText)
  }
  const handleCopy = () => {

    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const handleonchange = (event) => {

    setText(event.target.value)
  }

  const [text, setText] = useState('');


  return (
    <>
      <div className="container "  >
        <h1 style={{ backgound: "black" }}>{props.heading}-</h1>
        <div className="mb-3" />
        <textarea className="form-control textAreaDark" value={text} onChange={handleonchange} id="MyBox" rows="8"></textarea>
        <div />
        <button className=" btn btn-primary mx-2 my-2" onClick={handleUpclick}>Click To Convert Upper Case Here</button>
        <button className=" btn btn-primary mx-2 my-2" onClick={handleLoclick}>Click To Convert Lower Case Here</button>
        <button className=" btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className=" btn btn-primary mx-2 my-2" onClick={handleExtraspaces}>Remove extra spaces</button>
        <button className=" btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minute Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something To Preview it"}</p>
      </div>
    </>
  )
}
