import React, { useEffect } from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import img from "../../../image/im4.png"
function Home(){
    const navigate = useNavigate();
    const {id} = useParams(); 

    return(
        <div>
            <div className="HomeContainer">
            <img src={img} alt="" srcset="" className="logo" />
                <p onClick={() => navigate(`/home/${id}`)} className="Bt">Home</p>
                <p onClick={() => navigate(`/profile/${id}`)} className="Bt">Profile</p>
                <p onClick={() => navigate(`/qunList/${id}`)} className="Bt">Qun List</p>
                <p onClick={() => navigate(`/createQun/${id}`)} className="Bt">Create Qnu</p>
                <p onClick={() => navigate(`/yourQun/${id}`)} className="Bt">My Qun</p>
                <p onClick={() => navigate(`/ranking/${id}`)} className="Bt">Ranking</p>
                <p onClick={() => navigate('/login')} className="Bt">Logout</p>   
            </div>   
             
            <div className="HomeContainer1">
            <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading2">HTML</h3>
                    <button className="LearnBtn1" onClick={() => navigate(`/learn/${id}`)}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/start/${id}`)}>Start</button>
                </div>       
             </div>

             <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading2">CSS</h3>
                    <button className="LearnBtn2" onClick={() => navigate(`/learn/${id}`)}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/start/${id}`)}>Start</button>
                </div>       
             </div>
            <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading">JScript</h3>
                    <button className="LearnBtn3" onClick={() => navigate('/learn')}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/start/${id}`)}>Start</button>
                </div>
            </div>

            <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading2">Python</h3>
                    <button className="LearnBtn4" onClick={() => navigate(`/learn/${id}`)}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/start/${id}`)}>Start</button>
                </div>       
             </div>  

             <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading2">CPP</h3>
                    <button className="LearnBtn5" onClick={() => navigate(`/learn/${id}`)}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/start/${id}`)}>Start</button>
                </div>       
             </div>

            <div className="SubjectContainer">
                <div className="SubjectContaine1">
                    <h3 className="SubjectHeading2">Express</h3>
                    <button className="LearnBtn6" onClick={() => navigate(`/learn/${id}`)}>Learn</button>
                </div>
                <div className="SubjectContainer2">
                    <div className="balth1"></div>
                    <div className="balth2"></div>
                    <div className="balth3"></div>
                    <div className="balth4"></div>
                    <div className="balth5"></div>
                    <button className="StartBtn" onClick={() => navigate(`/start/${id}`)}>Start</button>
                </div>       
             </div>
        </div>   
    </div> 
    )
}

export default Home