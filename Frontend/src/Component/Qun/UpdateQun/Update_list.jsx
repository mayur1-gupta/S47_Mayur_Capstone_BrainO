import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Update_list.css";

function Update_list() {
  const [Qun, setQun] = useState("");
  const [Answer, setAnswer] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    axios
      .get(`https://s47-mayur-capstone-braino.onrender.com/updatequn/${id}`)
      .then((res) => {
        console.log("Response:", res.data);
        setQun(res.data.Question);
        setAnswer(res.data.Answer);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  },[id]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("Question", Qun);
    // formData.append("Answer", Answer);
    // console.log(formData);
    axios
      .put(`http://localhost:300/updatequn/${id}`, {Question:Qun, Answer:Answer}) 
      .then((res) => {
        console.log("Response:", res.data);
        setQun(res.data.Qun);
        setAnswer(res.data.Answer);
        navigate(`/yourqun/${localStorage.getItem("id")}`);
        window.location.reload();
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  const handleQun = (e) => {
    setQun(e.target.value);
  };
  const handleAns = (e) => {
    setAnswer(e.target.value);
  };
  return (
    <div className="update-container">
      <h1 className="update-heading">Update</h1>
      <input type="text" value={Qun} onChange={handleQun}  className="updateQuestion"/>
      <input type="text" value={Answer} onChange={handleAns} className="updateAnswer"/>
      <button onClick={(e)=>handleUpdate(e)} className="update-btn">Update</button>
      <button onClick={() => navigate(`/yourqun/${localStorage.getItem("Email")}`)} className="cancel-btn">Cancel</button>
    </div>
  );
}

export default Update_list;
