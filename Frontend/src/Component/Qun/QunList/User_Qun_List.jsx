import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User_Qun_List.css";
import { useNavigate , useParams } from "react-router-dom";
import img from "../../../../image/im4.png";
function QuestionList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://s47-mayur-capstone-braino.onrender.com/yourQun/${localStorage.getItem("Email")}`)
      .then((res) => {
        console.log("Response:", res.data);
        console.log(localStorage.getItem("Email"));
        setList(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);


  function handleDelete(id) {
    axios
      .delete(`https://s47-mayur-capstone-braino.onrender.com/deletequn/${id}`)
      .then((res) => {
        console.log("Response:", res.data);
        setList(list.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function handleUpdate(id) {
    navigate(`/updatequn/${id}`);

  }

  if (!list){
    return <div>Loading...</div>;
  }

  if (!list || list.length === 0) {
    return (
    <>
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
    <div className="NoQuestion">No question...</div>
    </>
    )
  }

  return (
    <div className="All_Qun_List">
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
        <div>
        <div className="Headingcontainer">
          <h1 className="Heading1">My Question </h1>
          <button className="Filter1">Filter</button>
        </div>

        <div className="QuestionList">
          {list.map((item, index) => (
            <div key={index}>
              <p className="Question">🏃🏻⠿ {item.Question}</p>
              <p className="Answer">{item.Answer}</p>
              <div id="Like">
                <button onClick={() => handleUpdate(item._id)} className="Update_btn">Update</button>
                <button onClick={() => handleDelete(item._id)} className="Delete_btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

export default QuestionList;
