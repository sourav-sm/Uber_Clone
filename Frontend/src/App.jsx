import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/userLogin' 
import CaptainLogin from './pages/captainLogin'
import UserSignup from './pages/userSignup'
import CaptainSignup from './pages/captainSignup'
import Start from './pages/start'
import UserProtectWrapper from './pages/userProtectWrapper'
import CaptainProtectWrapper from './pages/captainProtectWrapper'
import UserLogout from './pages/userLogout'
import CaptainLogout from './pages/captainLogout'
import CaptainHome from './pages/captainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'


function App() {
  
  return (
      <div>
          <Routes>
            <Route path="/" element={<Start/>} />
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/register" element={<UserSignup/>} /> 
            <Route path="/captain-login" element={<CaptainLogin/>} /> 
            <Route path="/captain-register" element={<CaptainSignup/>} />
            <Route path="/ride" element={<Riding/>} />
            <Route path="/captain-riding" element={<CaptainRiding/>} />

            <Route path="/home" element={
              <UserProtectWrapper>
                <Home/>
              </UserProtectWrapper>
            } />
            <Route path='/user/logout' element={
              <UserProtectWrapper>
                <UserLogout/>  
              </UserProtectWrapper>
              }/>
              
              <Route path='/captain-home' element={
              <CaptainProtectWrapper>
                <CaptainHome/>
              </CaptainProtectWrapper>
              }/>
            <Route path='/captain/logout' element={
              <CaptainProtectWrapper>
                <CaptainLogout/>  
              </CaptainProtectWrapper>
              }/>
          </Routes>
      </div>
       
  )
}

export default App
