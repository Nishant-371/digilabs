import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Icon from './Icon.jsx'
import Icon2 from './Icon2.jsx'
import './App.css';
import  {Login}  from './Login';
import Page from './Nextpage.jsx';
import Nextpage from './Nextpage.jsx';
import Success from './Success.jsx'
import Login_correct from './Login_correct.jsx';






function App() {
  
  const [currentForm,setCurrentForm]=useState('login')
  
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }


  return (
    <>
    
       <Router>
      <Routes>
      <Route path="/page" element={<Nextpage/>} /> 
      <Route path="/" element={<Login_correct/>} /> 
      <Route path="/success" element={<Success/>} /> 
      </Routes>
    </Router> 

    
    
  
    </>  
  );
}

export default App;
