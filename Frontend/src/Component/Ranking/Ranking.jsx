import React from 'react'
import "./Ranking.css"
import { useNavigate, useParams } from "react-router-dom";
import img from "../../../image/im4.png"
function Ranking() {
    const navigate = useNavigate();
    const {id} = useParams();
  return (
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
        <h1 className='Ranking'>Coming Soon ...</h1>
    </div>
  )
}

export default Ranking
