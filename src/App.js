import React, { useState } from "react";
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import Alert from "./componants/Alert";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>}>  
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
