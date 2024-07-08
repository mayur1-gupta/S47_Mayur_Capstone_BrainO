import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProfileImageUpload = () => {
  const [file, setFile] = useState(null);
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();

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
      const res = await axios.post(`http://localhost:300/upload/${userId}`, formData, {
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
    <div>
      {file && <p>{file.name}</p>}
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>

  );
};

export default ProfileImageUpload;
