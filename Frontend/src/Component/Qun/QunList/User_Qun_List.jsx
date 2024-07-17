import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User_Qun_List.css";
import { useNavigate , useParams } from "react-router-dom";

function QuestionList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://s47-mayur-capstone-braino-1.onrender.com/yourQun/${localStorage.getItem("Email")}`)
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
    // localStorage.setItem("Qun", Qun);
    // localStorage.setItem("Answer", Answer);
    navigate(`/updatequn/${id}`);

  }

  return (
    <div className="User_Qun_List">
      <div id="User_Qun">
        <h1 id="List_Heading">Question List</h1>
      </div>
      <div id="List_btn">
        <button onClick={() => navigate(`/createqun/${id}`)} id="Create_btn">Create</button>
        <button onClick={() => navigate(`/home/${id}`)} id="Home_btn">Home</button>
      </div>

      <div id="QuestionList">
        {list.map((item, index) => (
          <div key={index}>
            <h3 id="Question">{item.Question}</h3>
            <p id="Answer">{item.Answer}</p>
            {/* <input type="text" value={item.Question} />
            <input type="text" value={item.Answer} /> */}
            <div id="Like">
              {/* <div><button onClick={heandle_love}>Love ❤️</button></div>
                <div><button onClick={heandle_like}>Like 👍🏻</button></div>
                <div><button onClick={heandle_dislike}>Dislike 👎🏻</button></div> */}
                <button onClick={() => handleUpdate(item._id)} id="Update_btn">Update</button>
              <button onClick={() => handleDelete(item._id)} id="Delete_btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
