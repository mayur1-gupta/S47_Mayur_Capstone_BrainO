import React, { useEffect, useState } from "react";
import "./Edit_Profile.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function Edit_Profile() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [number, setNumber] = useState("");
 const [age, setAge] = useState("");
//   const [photo, setPhoto] = useState("");
 const navigate = useNavigate();
 const { id } = useParams();


 useEffect(() => {
   axios
     .get(`https://s47-mayur-capstone-braino.onrender.com/editprofile/${id}`)
     .then((res) => {
       console.log(res.data);
       setName(res.data.Name);
       setEmail(res.data.Email);
       setNumber(res.data.Number);
       setAge(res.data.Age);
       // setPhoto(res.data.Photo);
     })
     .catch((err) => {
       console.log(err);
     });
 },[id]);
 const Edit_SubmitBtn = async () => {
   const formData = new FormData();
   formData.append("name", name);
   formData.append("number", number);
   formData.append("age", age);
   // formData. append ('photo', photo);
   console.log(formData);
   try {
     axios
       .put(`http://localhost:300/editprofile/${id}`, formData)
       .then((res) => {
         console.log("Updated Data", res.data);
         navigate(`/Profile/${id}`);
       })
       .catch((err) => {
         console.log(err);
       });
   } catch (error) {
     console.log(error);
   }
 
 };


 return (
   <div className="Edit_Container">
     <div className="Edit_Img">
       <h1 className="Edit_heading">Edit Profile</h1>
       <div className="profile_Img"></div>
       {/* <button onClick={change_img}>Change Img</button> */}
       {/* <input type="file" accept="image/*" onChange={handleImageChange} className='EditImg'/> */}
     </div>
     <div className="EditProfile">
       <h2 className="Edit_tag_head">Name</h2>
       <input
         type="text"
         className="Edit_tag_Input"
         value={name}
         onChange={(e) => setName(e.target.value)}
       />
       <h2 className="Edit_tag_head">Email</h2>
       <input
         type="text"
         className="Edit_tag_Input"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
       />
       <h2 className="Edit_tag_head">Number</h2>
       <input
         type="text"
         className="Edit_tag_Input"
         onChange={(e) => setNumber(e.target.value)}
         value={number}
       />
       <h2 className="Edit_tag_head">Age</h2>
       <input
         type="text"
         className="Edit_tag_Input"
         onChange={(e) => setAge(e.target.value)}
         value={age}
       />
       <button className="Edit_SubmitBtn" onClick={Edit_SubmitBtn}>
         Submit
       </button>
     </div>
   </div>
 );
}
export default Edit_Profile;
