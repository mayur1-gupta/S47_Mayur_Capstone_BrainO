import React, { useState } from 'react'
import axios from "axios"
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function QunCreate() {
    const[Question, setQuestion] = useState("");
    const[Answer, setAnswer] = useState("");
    
    const handleQun = (e) => {
        setQuestion(e.target.value)
        
    }
    const handleAns = (e) => {
        setAnswer(e.target.value);
    }
    // const {id} = useParams() 
    const navigate = useNavigate();
    const handleCreate = (e) => {
      e.preventDefault();
        const formData = new FormData();
        formData.append("Email", localStorage.getItem("Email"));
        formData.append("Question", Question);
        formData.append("Answer", Answer);
        
        
        axios.post(`https://s47-mayur-capstone-braino.onrender.com/createQun`, formData)
        .then((res) => {
            console.log("Response:", res.data);
            if(res.data){
              alert("Qun Created")
              navigate(`/home/${localStorage.getItem("id")}`)
            }
            else{
                alert("Qun Not Created")
            }
        })
        .catch((err) => {
            console.error("Error:", err);
        });
    }


  return (
    <div>
      <div>Create</div>
        <form action="" >
        <div>
        <h1>Question</h1>
        <input type="text" onChange={handleQun} value={Question}/>
        <br />
        <h1>ANS</h1>
        <input type="text" onChange={handleAns} value={Answer}/>
        </div>
        <div>
        <button className="CreateBtn" type="submit" onClick={handleCreate}>Create</button>
        </div>
        </form>
    </div>
  )
}

export default QunCreate
