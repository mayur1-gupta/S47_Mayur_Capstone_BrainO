import React, { useState } from 'react'
import axios from 'axios'
import "./Login.css"
import {useNavigate} from "react-router-dom"
import { useCookies } from "react-cookie";
import img1 from "../../../image/im1.png";

function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [cookies,setCookie] = useCookies([
        "Token",
    ])

    const navigate = useNavigate();

    const hendleEmail = (e) => {
        setEmail(e.target.value)
        // console.log(Email);
    }
    const hendlePassword = (e) => {
        setPassword(e.target.value)
        // console.log(Password);
    }
    const hendleLogin = () => {
            localStorage.setItem("Email", Email)
            localStorage.setItem("Password", Password)
            axios.post("https://s47-mayur-capstone-braino.onrender.com/login", {
                Email: Email,
                Password: Password
            })
            .then((res) => {
                console.log("Response:", res.data);
                if(res.data.data){
                    navigate(`/Home/${res.data.data._id}`)                    
                    localStorage.setItem("id", res.data.data._id)
                    setCookie("token" ,res.data.token)

                }
                else{
                    alert("Login Failed")
                }                
            })
            .catch((err) => {
                console.log("Error:", err);
            })
        }
        



  return (
    <div>
        <div className="login-container"> 
            <div className='login-cont'>
            <h1 className="login-text">Login</h1>
            <input type="text" placeholder='Email' onChange={hendleEmail} className='input_login_email'/>
            <input type="text" placeholder='Password' onChange={hendlePassword} className='input_login_password'/>
            <button onClick={hendleLogin} className="login-btn">Login</button>
            </div>
            <div className='login-x'>
                <img src={img1} alt=""  className='login-img'/>
            </div>
        </div>
    </div>
  )
}

export default Login
