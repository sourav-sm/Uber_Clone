import { Link } from "react-router-dom"
import React,{ useContext, useState } from 'react'
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    
    const {captain,setCaptain}=useContext(CaptainDataContext);//note it should be in curly braces
    const navigate=useNavigate();

    const submitHandler=async (e)=>{
        e.preventDefault();//this will prevent the page from reloading
        const captain={
            email:email,
            password
        };
    
       try{
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain);
            if(response.status===200){//200 means the data is created successfully
                const data=response.data;
                setCaptain(data.captain);
                localStorage.setItem('token',data.token);
                navigate('/captain-home');    
            }
       }catch(error){
              console.log('Error while logging user',error);
       }
        //reset the input fields
        setEmail('');
        setPassword('');    
    }
    
    
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
               <img className="w-20 mb-10" src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png" />
               <form onSubmit={(e)=>submitHandler(e)}>
                   <h3 className="text-lg font-medium mb-2">What's your email Id</h3>
                   <input className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" required placeholder="Enter your Email" 
                   value={email} onChange={(e)=>setEmail(e.target.value)}
                   />

                   <h3 className="text-lg font-medium mb-2 mt-2">Enter Your Password</h3>
                   <input type="password" required placeholder="Enter your Password" className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
                   value={password} onChange={(e)=>setPassword(e.target.value)}
                   />
                   
                   <button
                       className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                   >Login</button>
                  
                  <p  className="text-lg font-semibold">New Here?<Link to={"/captain-register"} className="text-blue-600"> Create new Account</Link> </p>
               </form>
            </div>
            <div className="mb-12 px-10 align-middle">
                <Link to={"/captain-login"} className="bg-orange-600 flex items-center justify-center rounded-xl text-white  border-2 font-semibold mt-5 mb-7 px-4 py-2 w-full text-lg placeholder:text-base">
                    Sign in as a User
                </Link>
            </div>
        </div>
    )   
}