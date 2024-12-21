// import axios from "axios";
// const BASE_URL=import.meta.env.VITE_BASE_URL;
//  import { useNavigate } from "react-router-dom";

// export default function UserLogout() { 
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();

//     axios.get(`${BASE_URL}/users/logout`,{
//         headers:{
//             'Authorization':`Bearer ${token}`
//         }
//     }).then((response)=>{
//         if(response.status===200){
//             localStorage.removeItem('token');
//             navigate('/');
//         }
//     })

//     return (
//         <div>
//          user logout
//     </div>
//     )   
// }

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/')
            console.log("link",import.meta.env.VITE_API_URL);
        }
    })

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout