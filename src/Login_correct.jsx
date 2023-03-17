import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Icon from './Icon.jsx'
import Icon2 from './Icon2.jsx'
import './App.css';
import  {Login}  from './Login';
import Page from './Nextpage.jsx';
import Nextpage from './Nextpage.jsx';
import Success from './Success.jsx'
// import Login_correct from './Login_correct.jsx';





const Login_correct = () => {
  return (
    <div className='App'>
          
      <div><Icon/></div>
      <div className='form'><Login  /></div>
      <div className='Member'> <span className='main'>Not member?</span><span className='create main'> Create account.</span></div>
      <div className='icon3' ><Icon2/></div>    
      
 
    </div>
  )
}

export default Login_correct