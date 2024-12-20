import { Link } from "react-router-dom"
import { useState } from 'react'

export default function UserLogin() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [CaptainData,setCaptaindata]=useState({});
    
    const submitHandler=(e)=>{
        e.preventDefault();//this will prevent the page from reloading
        setCaptaindata({
            fullName:{
                firstName:firstName,
                secondName:secondName
            },
            email:email,
            password:password,
        });
        //reset the input fields
        setEmail('');
        setPassword('');
        setFirstName('');
        setSecondName('');
    }
    
    
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
            <img className="w-20 mb-10" src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png" />
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