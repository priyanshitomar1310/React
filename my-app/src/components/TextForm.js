import React,{useState} from 'react'

export default function TextForm(props) {
  const convertUP = ()=>{
    let newText=text.toUpperCase()
    setText(newText);
  }
  const convertLOW = ()=>{
    let newText=text.toLowerCase()
    setText(newText);
  }
const clearText=()=>{
  let newText="";
  setText('');
}

// const [color, setColor] = useState("Green");

// const convertColor = () => {
//   setColor("red");
// };

  const changefunction = (event)=>{
    console.log("This function is clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
          <textarea className="form-control"value ={text} onChange={changefunction} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertUP} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={convertLOW} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText} >Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes to read</p>
        <h2>Preview </h2>
        <p>{text}</p>
    </div>
    </>
  )
}
