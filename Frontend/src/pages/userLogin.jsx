import { Link } from "react-router-dom"
import { useState } from 'react'

export default function UserLogin() {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [userData,setUserdata]=useState({});
    
    const submitHandler=(e)=>{
        e.preventDefault();//this will prevent the page from reloading
        setUserdata({
            email:email,
            password:password
        });
        //reset the input fields
        setEmail('');
        setPassword('');    
    }
    
    
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
               <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
               <form onSubmit={(e)=>submitHandler(e)}>
                   <h3 className="text-lg font-medium mb-2">What's your email Id</h3>
                   <input className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" required placeholder="Enter your Email" 
                   value={email} onChange={(e)=>setEmail(e.target.value)}
                   />

                   <h3 className="text-lg font-medium mb-2 mt-2">Enter Your Password</h3>
                   <input type="password" required placeholder="Enter your Password" className="bg-gray-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
                   value={password} onChange={(e)=>setPassword(e.target.value)}
                   />
                   
                   <button  className="bg-black text-white font-semibold mt-5 mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"  type="submit">
                      Login
                    </button>
                  
                  <p  className="text-lg font-semibold">New Here?<Link to={"/register"} className="text-blue-600"> Create new Account</Link> </p>
               </form>
            </div>
            <div className="mb-12 px-10 align-middle">
                <Link to={"/captain-login"} className="bg-green-600 flex items-center justify-center rounded-xl text-white  border-2 font-semibold mt-5 mb-7 px-4 py-2 w-full text-lg placeholder:text-base">
                    Sign in as a Captain
                </Link>
            </div>
        </div>
    )   
}