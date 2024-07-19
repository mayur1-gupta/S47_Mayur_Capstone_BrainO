import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Profile.css'
import { useNavigate,useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import img from "../../../image/im4.png"
import img1 from "../../../image/im5.avif"

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
          const res = await axios.get(`https://s47-mayur-capstone-braino.onrender.com/profile/${id}`, {
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
  
  if (!photo && !name) return <div className='loading'></div>;

  return (
    <div className="profile-container">
        <div className="HomeContainer">
            <img src={img} alt="" srcset="" className="logo" />
                <p onClick={() => navigate(`/home/${id}`)} className="Bt">Home</p>
                <p onClick={() => navigate(`/profile/${id}`)} className="Bt">Profile</p>
                <p onClick={() => navigate(`/qunList/${id}`)} className="Bt">Qun List</p>
                <p onClick={() => navigate(`/createQun/${id}`)} className="Bt">Create</p>
                <p onClick={() => navigate(`/yourQun/${id}`)} className="Bt">My Qun</p>
                <p onClick={() => navigate(`/ranking/${id}`)} className="Bt">Ranking</p>
                <p onClick={() => navigate('/login')} className="Bt">Logout</p>   
            </div>  
      <div className="flex">
        <div>
        {photo ? (
            <img src={photo} alt="photo" className="profileImg" />
          ) : (
            <img src={img1} alt="default" className="profileImg" />
          )}
        </div>
        <div className='profileInfo'>
          <h2 className='heading6'> Name </h2>
          <p className='name'>{name}</p>
          <h2 className='heading6'>Email</h2>
          <p className='name'>{email}</p>
          <h2 className='heading6'>Number</h2>
          <p className='name'>{number}</p>
          <h2 className='heading6'>Age</h2>
          <p className='name'>{age}</p>
        </div>
      </div>
      <div className='profileBtn'>
        <button className='uploadBtn' onClick={() => navigate(`/upload/${localStorage.getItem('id')}`)}>Upload</button>
        <button className='EditBtn' onClick={() => navigate(`/editprofile/${localStorage.getItem('id')}`)}>Edit</button>
      </div>
    </div>
  )
}

export default Profile


