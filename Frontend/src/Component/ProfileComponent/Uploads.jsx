import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import './Uploade.css'
import img from '../../../image/im4.png'

const ProfileImageUpload = () => {
  const [file, setFile] = useState(null);
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();
  const {id} = useParams()
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profileImage', file);
    formData.append('userId', userId);
    try {
      console.log("here");
      const res = await axios.post(`https://s47-mayur-capstone-braino.onrender.com/upload/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      console.log("Response:", res.data);
      navigate('/Profile/' + userId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="upload">
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
      <div className="image-container">
        {file && <img src={URL.createObjectURL(file)} alt="Uploaded" className='image'/>}
          {/* {file && <p className='name_text'>{file.name}</p>} */}
      </div>
      <form onSubmit={onSubmit} className="form">
        <input type="file" onChange={onFileChange}  className='file'/>
        <button type="submit" className="uploadBtn">Upload</button>
      </form>
    </div>

  );
};

export default ProfileImageUpload;
