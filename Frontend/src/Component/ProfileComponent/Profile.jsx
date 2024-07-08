import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Profile.css'
import { useNavigate,useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie';



function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate=useNavigate()
  const {id} = useParams()



    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const res = await axios.get(`http://localhost:300/profile/${id}`, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          if (res.data === "notAuthorization") {
            removeCookie('token');
            navigate("/login");
          } else {
            setName(res.data.Name);
            setEmail(res.data.Email);
            setNumber(res.data.Number);
            setAge(res.data.Age);
            setPhoto(res.data.profileImage);
          }
        } catch (err) {
          if (err.response && err.response.status === 403) {
            console.error("Authorization error: ", err.response.data);
            removeCookie('token');
            navigate('/login');
          } else {
            console.error(err);
          }
        }
      };
  
      fetchProfile();
    }, [id, cookies.token, navigate, removeCookie]);
  
  // if (!photo) return <div>Loading...</div>;
  // console.log(photo);

  return (
    <div className="profile-container">
      {/* <div>{ photo && <img src= {photo} alt="photo"/>}</div> */}
      <div className='profileDev'>
        <h1 className="profile-heading">Profile</h1>
      </div>
      <div className="flex">
        <div>
            <div>{ photo && <img src= {photo} alt="photo" className='profileImg'/>}</div>
            <button className='uploadBtn' onClick={() => navigate(`/upload/${localStorage.getItem('id')}`)}>Upload</button>
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
        <button className="HomeBtn" onClick={() => navigate(`/home/${localStorage.getItem("id")}`)}>Home</button>
      </div>
    </div>
  )
}

export default Profile


