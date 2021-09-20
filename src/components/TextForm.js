import React,{useState} from "react";

export default function TextForm(props) {
  const[text,setText]=useState("");

  const handleUpClick=()=>{
    // console.log("Convert to Uppercase was clicked: "+text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }

  const handleLoClick=()=>{
    // console.log("Convert to Uppercase was clicked: "+text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleClearClick=()=>{
    let newText= "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy =()=>{
    var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  }


  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'#060b3e':'white' }}> 
        <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color : props.mode==='light'?'#060b3e':'white'}} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove whitespaces</button>
      </div>
    </div>
    <div className="container " style={{color : props.mode==='light'?'#060b3e':'white' }}>
      <h2>Your Text Summary</h2>
      <p>Contains {text.split(" ").length} words and {text.length} characters.</p>
      <p>Can be read in {0.008 * text.split(" ").length} minutes.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter the text above to preview'}</p>
    </div>
    </>
  );
}
