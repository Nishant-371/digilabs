import React from 'react'
import Icon from './Icon.jsx'
import Icon2 from './Icon2.jsx'
import './styles/Nextpage.css'
import { useNavigate  , Link } from "react-router-dom";
import Success from './Success.jsx';


const Nextpage = () => {
  const Navigate = useNavigate();

  const shoot = () => {
    Navigate("/success");
    // alert("Great Shot!");

    // <Navigate to="/success" />  
    
    
  }

  return (
    <div >
        <div><Icon/></div>
        <h5 className="head">Enter the verification <br/> code to continue</h5>
        <div className='text'><span>We sent to <span className='inside_text'>hellouser@heads.design</span>. If you <br/> don’t see it, check your spam.</span></div>
        <div className='form'>
        <form >
            <input className='box' type="text" oninput="this.value=this.value.replace(/[^0-9]/g,'');" maxLength="1" onClick={shoot}/> <input className='box' type="number" /> <input className='box' type="number"/>
            <input className='box' type="number" onClick={shoot}/> <input className='box' type="number" onClick={shoot}/> <input className='box' type="number" onClick={shoot}/>
        </form> 
        </div>
        <div className='Member'> <span className='main'>Not member?</span><span className='create main'> Create account.</span></div>
        <button className="back">
           <Link className='back_btn' to= "/">Back</Link>
           </button>
        <button className="resend">Resend code</button>
        <div className='icon7' >
        <Icon2/>
        </div> 
    </div>
  )
}

export default Nextpage