import React, { useEffect, useState } from "react";
import axios from "axios";
import "./All_Qun_List.css";
import img from "../../../../image/im4.png";
import { useNavigate ,useParams} from "react-router-dom";

function QuestionList() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    axios
      .get("https://s47-mayur-capstone-braino.onrender.com/qunList")
      .then((res) => {
        console.log("Response:", res.data);
        const updatedList = res.data.map(item => ({ ...item, love_count: 0, like_count: 0, dislike_count: 0 }));
        setList(updatedList);
        // setList(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  
  const handleLove = (index) => {
    // Update the love count for the question at the given index
    setList(prevList => {
      const newList = [...prevList];
      newList[index].love_count += 1;
      return newList;
    });
  }

  const handleLike = (index) => {
    // Update the like count for the question at the given index
    setList(prevList => {
      const newList = [...prevList];
      newList[index].like_count += 1;
      return newList;
    });
  }

  const handleDislike = (index) => {
    // Update the dislike count for the question at the given index
    setList(prevList => {
      const newList = [...prevList];
      newList[index].dislike_count += 1;
      return newList;
    });
  }

  if (!list) {
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
    {/* <div className="loading"></div> */}
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
                <p onClick={() => navigate(`/createQun/${id}`)} className="Bt">Create Qun</p>
                <p onClick={() => navigate(`/yourQun/${id}`)} className="Bt">My Qun</p>
                <p onClick={() => navigate(`/ranking/${id}`)} className="Bt">Ranking</p>
                <p onClick={() => navigate('/login')} className="Bt">Logout</p>   
      </div> 
      <div className="Headingcontainer">
        <h1 className="Heading">Questions List</h1>
        <button className="Filter" onClick={() => alert("Coming Soon")}>Filter</button>
      </div>
      <div className="headingcontainer">
      <div className="QuestionList">
        {list.map((item, index) => (
          <div key={index} >
            <h2 className="Number">{index + 1}</h2>
            <p className="Question">{item.Question}</p>
            <p className="Answer">{item.Answer}</p>
            <div id="Like">
                <div><button onClick={()=>handleLove(index)} className="love">{item.love_count} Love ❤️</button></div>
                <div><button onClick={()=>handleLike(index)} className="like">{item.like_count} Like 👍🏻</button></div>
                <div><button onClick={()=>handleDislike(index)} className="dislike">{item.dislike_count} Dislike 👎🏻</button></div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default QuestionList;
