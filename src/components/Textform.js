import React, {useState} from 'react'

export default function Textform(props) {
  const [speaking, setSpeaking] = useState(false);
  
    const handleUPClick =()=>{
        console.log("clicked")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("converted to Uppercase","success")
            
    }
    const handleDownClick =()=>{
      console.log("clicked")
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("converted to Lowercase","success")

          
  }
  const handleClearClick =()=>{
    console.log("clicked")
    let newText=('')
    setText(newText)
        
}
    const onChanged=(event)=>{
        console.log("changed")
        setText(event.target.value)
        
        
    }
    const speak = () => {
      if (text) {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        setSpeaking(true);
      }
    };
    const stopSpeech = () => {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    };
  
    const handleButtonClick = () => {
      if (speaking) {
        stopSpeech();
      } else {
        speak();
      }
    };
    const handleCopy=()=>{
      navigator.clipboard.writeText(text)
      props.showAlert('text is copy','success')
    }
   
    const[text,setText]=useState("")
    
  return (
    <>
    <div className='container'  style={{color: props.mode==='light'?'black':'white'}}>
        
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" aria-label="With textarea" id='myBox' rows={8} value={text} onChange={onChanged} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='light'?'black':'white'}}></textarea>
    

</div>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleUPClick}>Change to Uppercase</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleDownClick}>Change to Lower case</button>
<button disabled={text.length===0} type="submit" onClick={handleButtonClick} className="btn btn-primary mx-2 my-2">
{speaking ? 'Stop Speaking' : 'Speak'}</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleClearClick} >Clear text</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>

    </div>
    <div className='container my-3'  style={{color: props.mode==='light'?'black':'white'}}>
        <h1>
            Text Summery
        </h1>
    <p>
        total words in text is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and total character in text are {text.length}
    </p>
    <p>
        {0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read time
    </p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"nothing to preview"}</p>
    </div>
    </>
  )
}
