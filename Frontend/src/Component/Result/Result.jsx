import React from 'react'
import { Cookies } from 'react-cookie';
import { useNavigate , useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Result = ()=>{
    const [cookie,setCookie] = useCookies(["Name"])
    const userName = cookie.Name;
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const {Sanding_Result} = location.state;
    
    // const correctAnswers = score;
    // const wrongAnswers = totalQun - correctAnswers;
    // // const cookies =getCookie("Name");
    
    // const  handleResultToHomeBtn = () =>{
    //   navigate(`/Home/${localStorage.getItem("id")}`);
    //   axios
    //   .post(`http://localhost:300/result`, {
    //     Email : localStorage.getItem("Email"),
    //     Score: score,
    //     TotalQun: totalQun,
    //     correctAnswers: correctAnswers,
    //     wrongAnswers: wrongAnswers,        
    //   })
    //   .then((res) => {
    //     console.log("Response:", res.data);
    //   })
    //   .catch((err) => {
    //     console.log("Error:", err);
    //   })
    // }
    console.log(Sanding_Result);
  return (
    <div>
      {/* <h1>Result</h1>
      <h3>Level : {}</h3>
      <h4>Number of Total Questions : {totalQun}</h4>
      <h3>Number of Correct Answers : {correctAnswers}</h3>
      <h3>Number of Wrong Answers : {wrongAnswers}</h3>
      <h2>Hi {userName} your score is : {(score * 100)/totalQun}% </h2>
      <button onClick={handleResultToHomeBtn}>Home</button>  */}
    </div>
  )
}

export default Result
