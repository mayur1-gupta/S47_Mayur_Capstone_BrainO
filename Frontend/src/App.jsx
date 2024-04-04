import './App.css'
import {Routes , Route } from "react-router-dom";
import Introduction from './Component/IntroductionComponent/Introduction'
import SignUp from './Component/SignUpComponent/SignUp'
import Login from './Component/LoginComponent/Login'
import Home from './Component/HomeComponent/Home'
import Profile from './Component/ProfileComponent/Profile'
// import Edit_Profile from './Component/EditProfileComponent/Edit_Profile'
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Introduction/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home/:id" element={<Home/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          {/* <Route path="/editprofile/:id" element={<Edit_Profile/>}/> */}
        </Routes>
      </>
  )
}

export default App
