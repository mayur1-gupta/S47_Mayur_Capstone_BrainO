import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../../../image/im4.png";
import "./Create.css";

function QunCreate() {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  const { id } = useParams();
  const handleQun = (e) => {
    setQuestion(e.target.value);
  };
  const handleAns = (e) => {
    setAnswer(e.target.value);
  };
  // const {id} = useParams()
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Email", localStorage.getItem("Email"));
    formData.append("Question", Question);
    formData.append("Answer", Answer);

    axios
      .post(
        `https://s47-mayur-capstone-braino.onrender.com/createQun`,
        formData
      )
      .then((res) => {
        console.log("Response:", res.data);
        if (res.data) {
          // alert("Qun Created");
          navigate(`/home/${localStorage.getItem("id")}`);
        } else {
          alert("Qun Not Created");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div>
      <div className="HomeContainer">
        <img src={img} alt="" srcset="" className="logo" />
        <p onClick={() => navigate(`/home/${id}`)} className="Bt">
          Home
        </p>
        <p onClick={() => navigate(`/profile/${id}`)} className="Bt">
          Profile
        </p>
        <p onClick={() => navigate(`/qunList/${id}`)} className="Bt">
          Qun List
        </p>
        <p onClick={() => navigate(`/createQun/${id}`)} className="Bt">
          Create Qun
        </p>
        <p onClick={() => navigate(`/yourQun/${id}`)} className="Bt">
          My Qun
        </p>
        <p onClick={() => navigate(`/ranking/${id}`)} className="Bt">
          Ranking
        </p>
        <p onClick={() => navigate("/login")} className="Bt">
          Logout
        </p>
      </div>

      <div className="CreateContainer">
        <div>
          <p className="CreateHeading">Create Qun</p>
        </div>
        <form action="" className="CreateForm">
          <div>
            <h1 className="CreateHeading1">Question</h1>
            {/* <input type="text" onChange={handleQun} value={Question} className="CreateInput"/> */}
            <textarea name="" id="" cols="300" rows="100" onChange={handleQun} value={Question} className="CreateInput"></textarea>
            <br />
            <h1 className="CreateHeading1">Answer</h1>
            {/* <input type="text" onChange={handleAns} value={Answer} /> */}
            <textarea name="" id="" cols="300" rows="100" onChange={handleAns} value={Answer} className="CreateInput"></textarea>
          </div>
          <div>
            <button className="CreateBtn" type="submit" onClick={handleCreate}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QunCreate;
