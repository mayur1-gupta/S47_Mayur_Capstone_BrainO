import React, { useEffect, useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import img from '../../../image/im2.png';


function SignUp() {
  const { register, handleSubmit,formState: { errors }} = useForm();
  const [cookies, setCookie] = useCookies([
    "Name",
    "Email",
    "Password",
    "ConfirmPassword",
    "Number",
  ]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Number, setNumber] = useState("");
  // const[sub,setSub]=useState(false)

  const navigate = useNavigate();
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function onSubmit (e) {
   

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Password", Password);
    formData.append("Number", Number);

    axios
      .post("https://s47-mayur-capstone-braino.onrender.com/signup", formData)
      .then((res) => {
        console.log("Response:", res.data);
        setCookie("Name", res.data.Name);
        setCookie("Email", res.data.Email);
        setCookie("Password", res.data.Password);
        setCookie("Number", res.data.Number);
        console.log("Form submitted successfully!");
        navigate("/Login");
      })
      .catch((err) => {
        console.error("Error:", err)
    });
  }
  return (
      <div className="SignUpPage">
        <div className="background1">
          <img src={img} className="image1"></img>
        </div>
        <div className="Formbackground">
          <h1 className="SignupHeading">SignUp</h1>
          <form typeof="submit" onSubmit={handleSubmit((e)=>onSubmit(e))}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={Name}
              className="input"
              {...register("name", { required: true })}
              onChange={handleName}
            />
            <br />
            {errors.name && <span className="SignupError">Name is required</span>}
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={Email}
              className="input"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i})}
              onChange={handleEmail}
            />
            <br />
            {errors.email?.type === "required" && <span className="SignupError">Email is required</span> 
                || errors.email?.type === "pattern" && <span className="SignupError">Enter valid email</span>}
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={Password}
              className="input"
              {...register("password", { required: true, minLength: 4, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/g})}
              onChange={handlePassword}
            />
            <br/>
            {errors.password?.type=== "required" && <span className="SignupError">Password is required</span>
                || errors.password?.type === "minLength" && <span className="SignupError">Minimum length should be 4</span>
                || errors.password?.type === "maxLength" && <span className="SignupError">Maximum length should be 20</span>
                || errors.password?.type === "pattern" && <span className="SignupError">Enter valid password</span>}
            <br />
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              className="input"
              {...register("ConfirmPassword", { required: true, })}
              onChange={handleConfirmPassword}
            />
            <br />
            {errors.ConfirmPassword && <span className="ConfirmPasswordSignupError">Confirm Password is required</span> 
                || errors.ConfirmPassword===Password && <span className="ConfirmPasswordSignupError">Password and Confirm Password should be same</span>}
            <br />
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={Number}
              className="input"
              {...register("number", { required: true })}
              onChange={handleNumber}
            />
            <br />
            {errors.number && <span className="SignupError">Number is required</span>}
            <br />
            {/* <button className="buttonSubmit" onClick={(e) => handleSubmit(e)}> */}
            <button className="buttonSubmit" type="submit">
              Submit
            </button>
          </form>
          {/* <button className="buttonGoogle"><Link>Google</Link></button> */}
          <button className="loginButton" onClick={() => navigate("/Login")}>Login</button>
        </div>
      </div>
  );
}

export default SignUp;
