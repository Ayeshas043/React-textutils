
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Textform from './components/Textform';
import Alert from './components/Alert';
function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },3000);
  }
  const onToggle=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='black';
      showAlert("Dark mode has enabled","success");
      document.title="dark mode"
      // setInterval(() => {
      //   document.title="install textutils"
      // }, 3000);
      // setInterval(() => {
      //   document.title="its good text util"
      // }, 2000);
    }
    else{
      setMode('light')
      document.body.style.background='white';
      showAlert("Light mode has enabled","success");
      document.title="light mode"
     

    }
  }
  
  return (
    // <Router>
    <>
    <Navbar title='Utils' about='aboutUs' mode={mode} onToggle={onToggle}></Navbar>
    <Alert alert={alert}/>
    <div className='container my-3'>
    {/* <Routes> */}
          {/* <Route path="/about" element=
            {<About />}
 /> */}

          {/* <Route path="/" element= */}
          <Textform  heading='Text Analyze' mode={mode} onToggle={onToggle} showAlert={showAlert}/>
          {/* /> */}
          {/* </Routes> */}
        </div>
        </>
    // </Router>
  );
}

export default App;