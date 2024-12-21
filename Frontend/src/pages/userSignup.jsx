import { Link, useNavigate } from "react-router-dom"
import { useState,useContext } from 'react'
import axios from 'axios'
import {UserDataContext} from '../context/userContext';
const BASE_URL=import.meta.env.VITE_BASE_URL;


export default function UserSignup() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    // const [userData,setUserdata]=useState({});
    const {user,setUser}=useContext(UserDataContext);
      
   const navigate=useNavigate();

    
    const submitHandler= async (e)=>{
        e.preventDefault();//this will prevent the page from reloading
        const newUser={
            fullname:{
                firstname:firstName,
                secondname:secondName
            },
            email:email,
            password:password,
        };
        try {
            const response=await axios.post(`${BASE_URL}/users/register`,newUser);

            if(response.status===201){//status 201 'created' means user is registered
                const data=response.data;
                setUser(data.user);
                localStorage.setItem('token',data.token);
                navigate('/home');
            }
            //reset the input fields
            setEmail('');
            setPassword('');
            setFirstName('');
            setSecondName('');   
        } catch (error) {
            console.log("Error registering User",error.message);
        }        
    }
    
    
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
               <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
               <form onSubmit={(e)=>submitHandler(e)}>
                   <div>
                       <h3 className="text-lg font-medium mb-2">What's your Name</h3>
                       <div className="flex justify-between space-x-4">
                           <input className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="text" required placeholder="Enter your FirstName" 
                           value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                           />
                           <input className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="text" required placeholder="Enter your SecondName" 
                           value={secondName} onChange={(e)=>setSecondName(e.target.value)}
                           /> 
                        </div>
                   </div>
                   
                   <h3 className="text-lg font-medium mb-2 mt-2">What's your email Id</h3>
                   <input className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" required placeholder="Enter your Email" 
                   value={email} onChange={(e)=>setEmail(e.target.value)}
                   />

                   <h3 className="text-lg font-medium mb-2 mt-2">Enter Your Password</h3>
                   <input type="password" required placeholder="Enter your Password" className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
                   value={password} onChange={(e)=>setPassword(e.target.value)}
                   />
                   
                   <button  className="bg-black text-white font-semibold mt-5 mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"  type="submit">
                      Signup
                    </button>
                  
                  <p  className="text-lg font-semibold">Already have a Account?<Link to={"/login"} className="text-blue-600"> Signin </Link> </p>
               </form>
            </div>
            <div>
          <p className='text-xs leading-tight mb-3'>This site is protected by reCAPTCHA and the      <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
        </div>
      </div>
    )   
}