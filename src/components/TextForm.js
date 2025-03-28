import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was Clicked");
  }
  const handleOnChange = ()=>{
    console.log("onChange");
  }
  const [text, setText] = useState('Enter the text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
    </div>
  )
}
