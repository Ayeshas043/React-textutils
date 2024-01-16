import React  from 'react'

export default function About(props) {
    // const[myStyle, setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })
    
    const myStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='dark'?'black':'white'
    }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
                <div class="accordion" id="accordionExample">
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    TextUtils Use
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>

                    Quickly find out how many words are in a given text.
                    Determine the total number of characters in the text.
                    Speak feature is enabled.
                    clear the text.
                    show preview.
                    Change the case of the text to uppercase or lowercase.
                    Time in counting words.
                    </strong> 
                </div>
                </div>
            </div>
            
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Demand
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                The demand for text utilities, or text utils, arises from the need to perform various operations and manipulations on textual data. Text utilities are tools or software that provide functionalities to process, analyze, and modify text.
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
