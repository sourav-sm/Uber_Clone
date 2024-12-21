import React,{useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { RiArrowDownWideLine } from "react-icons/ri";

export default function Home() {
    const [Pickup,setPickup]=useState('');
    const [Destination,setDestination]=useState('');
    const [panelOpen,setpanelOpen]=useState(false);
    const panelRef=useRef(null);
    const closeRef=useRef(null);
    
    const submitHandler=(e)=>{
           e.preventDefault();
    }
    
    useGSAP(function(){
       if(panelOpen){
           gsap.to(panelRef.current,{
               height:'70%'
           })
           gsap.to(closeRef.current,{
            opacity:1
           })
       }else{
             gsap.to(panelRef.current,{
               height:'0%'
              })
              gsap.to(closeRef.current,{
                opacity:0
              })    
       }
    },[panelOpen]);


    return(
        <div className="relative h-screen">
            <img className="w-16 absolute pl-5 pt-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
            <div className="h-screen w-screen">
               <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map image" />
            </div>
            <div className="flex flex-col justify-end h-screen absolute w-full top-0">
                <div className="bg-white h-[30%] p-5 relative">
                    <RiArrowDownWideLine className='absolute right-6 top-6 text-2xl' 
                      ref={closeRef}
                      onClick={()=>setpanelOpen(false)}
                    />
                   <h3 className="text-2xl font-semibold mb-3">Find a Trip</h3>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 bg-black left-10 top-[40%] rounded-full"></div>
                      <input className="bg-slate-200 text-base rounded-lg px-12 py-2 w-full mb-3" 
                            value={Pickup}
                            onClick={()=>setpanelOpen(true)}
                            onChange={(e)=>setPickup(e.target.value)}
                            type="text" 
                            placeholder="Add a Pickup Point" />

                      <input className="bg-slate-200 text-base rounded-lg px-12 py-2 w-full" 
                            value={Destination}
                            onClick={()=>setpanelOpen(true)}
                            onChange={(e)=>setDestination(e.target.value)}
                            type="text" 
                            placeholder="Enter your Destination" />
                    </form>
                </div>
                <div className="bg-red-600 h-0" ref={panelRef}>
                     
                </div>
            </div> 
        </div>
    )
}