import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './Component/IntroductionComponent/Introduction'
import SignUp from './Component/SignUpComponent/SignUp'
import {Routes , Route } from "react-router-dom";
function App() {


  return (
      <>
        <Routes>
          <Route path="/" element={<Introduction/>} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </>
  )
}

export default App
