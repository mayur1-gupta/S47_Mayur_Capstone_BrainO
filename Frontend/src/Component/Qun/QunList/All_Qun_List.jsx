import React, { useEffect, useState } from "react";
import axios from "axios";
import "./All_Qun_List.css";

function QuestionList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://s47-mayur-capstone-braino-1.onrender.com/qunList")
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

  return (
    <div>
      <div>
        <h1>Question List</h1>
        <button>Filter</button>
      </div>
      <div id="QuestionList">
        {list.map((item, index) => (
          <div key={index}>
            <p>{item.Question}</p>
            <p>{item.Answer}</p>
            <div id="Like">
                <div><button onClick={()=>handleLove(index)}>{item.love_count} Love ❤️</button></div>
                <div><button onClick={()=>handleLike(index)}>{item.like_count} Like 👍🏻</button></div>
                <div><button onClick={()=>handleDislike(index)}>{item.dislike_count} Dislike 👎🏻</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
