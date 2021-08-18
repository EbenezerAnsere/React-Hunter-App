import React from 'react'
import './Forgetpassword.css'

export default function Forgetpassword() {
    return (
        <div className="form-container">
        <div className="Forget-password">          
                Email:<input type="text" placeholder="Enter your email" />
                Password:<input type="password" placeholder="Enter your password" />
                <button className="enter">Enter</button>      
        </div >
     </div >
    )
}

