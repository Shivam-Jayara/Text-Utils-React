import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alerts from "./components/Alerts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  function fun(){
    console.log("Onchange was called");
    const getValue=document.getElementById('inputColour').value;
    console.log(getValue);
    document.body.style.backgroundColor=getValue;
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#060b3e';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  

  return (
    <>
      <Router>
      <Navbar tittle="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} myfunc={fun} />
      <Alerts alert={alert} />
      <div className="container my-4">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
            <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
      </div>

      </Router>  
      
      
    </>
  );
}

export default App;
