import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');
    const navigate=useNavigate()
//  const handlePhotoChange = (event) => {
//     setPhoto(event.target.files[0]);
//   };
 const {id} = useParams()
    useEffect(() =>{
        axios.get(`http://localhost:3000/profile/${id}`)
        .then((res) => {
            setName(res.data.Name);
            setEmail(res.data.Email);
            setNumber(res.data.Number);
            setAge(res.data.Age);
            setPhoto(res.data.Photo);
        })  
        .catch((err) => {
            console.log(err);
        })
    })


  return (
    <div className="profile-container">
      <div className='profileDev'>
        <h1 className="profile-heading">Profile</h1>
      </div>
      <div className="flex">
        <div>
            <div className='profileImg' value={photo}></div>
        </div>
        <div className='profileInfo'>
          {/* <h2>Name</h2> */}
          <input type="text" className='NameInput' value={name}/>
          {/* <p>{name}</p> */}
          {/* <h2>Email</h2> */}
          <input type="text" className='EmailInput' value={email}/>
          {/* <h2>Number</h2> */}
          <input type="text" className='NumberInput' value={number}/>
          {/* <h2>Age</h2> */}
          <input type="text" className='AgeE' value={age}/>
        </div>
      </div>
      <div>
        <button className='EditBtn' onClick={() => navigate(`/editprofile/${localStorage.getItem('id')}`)}>Edit</button>
        <button className="LogoutBtn" onClick={() => navigate('/login')}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
