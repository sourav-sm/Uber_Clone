import React, {useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";

export default function CaptainHome(){
    const ridePopupRef = useRef(null);

    const[ridePopup,setRidePopup]=useState(true);

    
    //animation for ride popup
    useGSAP(function(){
        if(ridePopup){
            gsap.to(ridePopupRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(ridePopupRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[ridePopup]);


    return(
        <div className="h-screen">
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <IoLogOut/>
                </Link>
            </div>
            <div className='h-[55%]'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            {/* NEED TO CHECK WHAT HAPPEN HERE  */}
        <div className='h-[45%]'>
            <CaptainDetails/>
        </div>

         {/* <CaptainDetails/> */}
        <div ref={ridePopupRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
           <RidePopup setRidePopup={setRidePopup}/>
        </div>
            
       </div> 
)}    