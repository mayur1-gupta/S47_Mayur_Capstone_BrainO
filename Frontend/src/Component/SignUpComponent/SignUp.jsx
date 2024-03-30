import React, { useEffect, useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
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

  function handleSubmit(e) {
    e.preventDefault();

    // Set cookies for each form field
    setCookie("Name", Name);
    setCookie("Email", Email);
    setCookie("Password", Password);
    setCookie("ConfirmPassword", ConfirmPassword);
    setCookie("Number", Number);
    console.log("Form submitted successfully!");

    // Create a new FormData object

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Password", Password);
    formData.append("ConfirmPassword", ConfirmPassword);
    formData.append("Number", Number);

    // Send the FormData object to the backend
    axios
      .post("http://localhost:3000/signup", formData)
      .then((res) => {
        console.log("Response:", res.data);
        // Handle success if needed
        navigate("/Login");
      })
      .catch((err) => {
        console.error("Error:", err);
        // Handle error if needed
      });
  }
  return (
      <div className="SignUpPage">
        <div className="Formbackground">
          <h1 className="SignupHeading">SignUp</h1>
          <form className="form" typeof="submit">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleName}
              value={Name}
              className="input"
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleEmail}
              value={Email}
              className="input"
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePassword}
              value={Password}
              className="input"
            />
            <br />
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
              value={ConfirmPassword}
              className="input"
            />
            <br />
            <input
              type="text"
              name="number"
              placeholder="Number"
              onChange={handleNumber}
              value={Number}
              className="input"
            />
            <br />
            <button className="buttonSubmit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
          <button className="buttonGoogle">With Google</button>
          <Link to="/login">Login</Link>
        </div>
      </div>
  );
}

export default SignUp;
