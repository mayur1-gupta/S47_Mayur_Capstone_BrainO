import React, { useEffect } from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const {id} = useParams(); 
    // useEffect(()=>{
    //     console.log(id);
    //     axios.get(`http://localhost:3000/home/${id}`)
    //     .then((res) => {
    //         console.log(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })
    return(
        <div>
            <div className="HomeContainer">
                <button onClick={() => navigate(`/profile/${id}`)} className="ProfileBt">Profile</button>
                <button onClick={() => navigate(`/qunList/${id}`)} className="QuestionBt">Question List</button>
                <button onClick={() => navigate('/login')} className="LogoutBt">Logout</button>
                <button onClick={() => navigate('/ranking')} className="RankingBt">Ranking</button>
                <button onClick={() => navigate(`/createQun/${id}`)} className="CreateBt">Create</button>
                <button onClick={() => navigate(`/yourQun/${id}`)} className="YourQunBt">Your Qun</button>
            </div>   
             
            <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading">JScript</h3>
                    <button className="LearnBtn1" onClick={() => navigate('/learn')}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/quiz/${id}`)}>Start</button>
                </div>
            </div>  

            {/* <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading3">English</h3>
                    <button className="LearnBtn1" >Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn">Start</button>
                </div>       
             </div> */}
        </div>    
    )
}

export default Home