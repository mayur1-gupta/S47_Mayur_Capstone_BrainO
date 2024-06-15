import './App.css'
import {Routes , Route } from "react-router-dom";
import Introduction from './Component/IntroductionComponent/Introduction'
import SignUp from './Component/SignUpComponent/SignUp'
import Login from './Component/LoginComponent/Login'
import Home from './Component/HomeComponent/Home'
import Profile from './Component/ProfileComponent/Profile'
import Edit_Profile from './Component/EditProfileComponent/Edit_Profile'
import CreateQun from './Component/Qun/CreateQun/Create'
import QunList from './Component/Qun/QunList/All_Qun_List'
import UserQunList from './Component/Qun/QunList/User_Qun_List'
import Update_list from './Component/Qun/UpdateQun/Update_list';
import Quiz from './Component/Starting_Quiz/Quiz';
import Result from './Component/Result/Result'; 
import Quizz from './Component/Starting_Quiz/Quizz';
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Introduction/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home/:id" element={<Home/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/editprofile/:id" element={<Edit_Profile/>}/>
          <Route path='/createQun/:id' element={<CreateQun/>}/>
          <Route path='/qunList/:id' element={<QunList/>}/>
          <Route path='/yourQun/:id' element={<UserQunList/>}/>
          <Route path='/updatequn/:id' element={<Update_list/>}/>
          <Route path='/quiz/:id' element={<Quiz/>}/>
          <Route path='/result/:id' element={<Result/>}/>
          <Route path='/quizz/:id' element={<Quizz/>}/>
        </Routes>
      </>
  )
}

export default App
