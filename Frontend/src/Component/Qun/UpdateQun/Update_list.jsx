import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Update_list.css";
import img from "../../../../image/im4.png";

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
  }, [id]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("Question", Qun);
    // formData.append("Answer", Answer);
    // console.log(formData);
    axios
      .put(`http://localhost:300/updatequn/${id}`, {
        Question: Qun,
        Answer: Answer,
      })
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
          <p className="CreateHeading2">Update Qun</p>
        </div>
        <div className="CreateForm">
          <h1 className="CreateHeading1">Question</h1>
          <textarea
            name=""
            id=""
            cols="300"
            rows="100"
            onChange={handleQun}
            value={Qun}
            className="CreateInput"
          ></textarea>
          <h1 className="CreateHeading1">Answer</h1>
          <textarea
            name=""
            id=""
            cols="300"
            rows="100"
            onChange={handleAns}
            value={Answer}
            className="CreateInput"
          ></textarea>
        </div>
      </div>
      <button onClick={(e) => handleUpdate(e)} className="update-btn">
        Update
      </button>
      <button
        onClick={() => navigate(`/yourqun/${localStorage.getItem("Email")}`)}
        className="cancel-btn"
      >
        Cancel
      </button>
    </div>
  );
}

export default Update_list;
