import React, { useEffect, useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import img from "../../../image/im2.png";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
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
  const [loading, setLoading] = useState(false);

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

  function onSubmit(e) {
    setLoading(true);
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
          navigate("/Login");
      })
      .catch((err) => {
        console.error("Error:", err);
        if (err.response && err.response.status === 400) {
          setErrorMessage("User already exists");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
        setLoading(false);
      });
  }

  const password = watch("password");
  if (!img) {
    return <div className="loading"></div>;
  }

  return (
    <div className="SignUpPage">
      <div className="background1">
        <img src={img} className="image1"></img>
      </div>
      <div className="Formbackground">
        <h1 className="SignupHeading">SignUp</h1>
        <form typeof="submit" onSubmit={handleSubmit((e) => onSubmit(e))}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            // value={Name}
            className="input"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z\s]*$/i,
                message: "Name must contain only letters and spaces",
              },
            })}
            onChange={handleName}
          />
          <br />
          {errors.name && (
            <span className="SignupError">{errors.name.message}</span>
          )}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            onChange={handleEmail}
          />
          <br />
          {errors.email && (
            <span className="SignupError">{errors.email.message}</span>
          )}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Minimum length should be 4",
              },
              maxLength: {
                value: 20,
                message: "Maximum length should be 20",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/g,
                message:
                  "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
            onChange={handlePassword}
          />
          <br />
          {errors.password && (
            <span className="SignupError">{errors.password.message}</span>
          )}
          <br />
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            className="input"
            {...register("ConfirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            onChange={handleConfirmPassword}
          />
          <br />
          {errors.ConfirmPassword && (
            <span className="SignupError">
              {errors.ConfirmPassword.message}
            </span>
          )}
          <br />
          <input
            type="text"
            name="number"
            placeholder="Number"
            className="input"
            {...register("number", {
              required: "Number is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Enter a valid number",
              },
            })}
            onChange={handleNumber}
          />
          <br />
          {errors.number && (
            <span className="SignupError">{errors.number.message}</span>
          )}
          <br />
          <button className="buttonSubmit" type="submit">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <button className="loginButton" onClick={() => navigate("/Login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
