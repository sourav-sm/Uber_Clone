import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/userLogin' 
import CaptainLogin from './pages/captainLogin'
import UserSignup from './pages/userSignup'
import CaptainSignup from './pages/captainSignup'


function App() {
  
  return (
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/register" element={<UserSignup/>} /> 
            <Route path="/captain-login" element={<CaptainLogin/>} /> 
            <Route path="/captain-register" element={<CaptainSignup/>} />
          </Routes>
      </div>
       
  )
}

export default App
