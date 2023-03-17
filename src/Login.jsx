import React, { useState } from "react";
import "./styles/login.css"
import { Link } from "react-router-dom";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  

    return (
        <>
        <div>
        <h5 className="heading">Welcome to<br/> Systempackage</h5>
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>

                   <div className="drop_btn"> 
                    <input className="EMAIL"  value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="hellouser" id="email" name="email" />
                    <select className="for_select">
                    <option >@head.design</option>
                    <option >@head.design</option>
                    <option >@head.design</option>
                    <option >@head.design</option>
                    </select>
                    </div>
                    <input className="PASSWORD"  type="password" placeholder="•••••••••• " id="password" name="password" />
                    <button className="SUBMIT" type="submit"  >
                    <Link className="page_link" to= "/page">Next</Link>
                    </button>
                    <button className="forgot">Forgot your password?</button>
                </form>
            </div>
        </div>
        </>
        
    )
    
}