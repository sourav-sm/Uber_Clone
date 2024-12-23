import React,{useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { RiArrowDownWideLine } from "react-icons/ri";
import LocationSearch from '../components/locationSearch';
import VehiclePanel from '../components/VehiclePanel';
import ConformRide from '../components/ConformRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

export default function Home() {
    const [Pickup,setPickup]=useState('');
    const [Destination,setDestination]=useState('');
    const [panelOpen,setpanelOpen]=useState(false);
    const panelRef=useRef(null);
    const vehicalRef=useRef(null);  
    const conformRideRef=useRef(null);
    const vehicleFoundRef=useRef(null);
    const waitingForDriverRef=useRef(null);
    const [vehicalPanel,setVehicalPanel]=useState(false);
    const [conformRide,setConformRide]=useState(false);
    const [vehicleFound,setVehicleFound]=useState(false);
   const [waitingForDriver,setWaitingForDriver]=useState(false);

    const submitHandler=(e)=>{
           e.preventDefault();
    }
    
    useGSAP(function(){
       if(panelOpen){
           gsap.to(panelRef.current,{
               height:'70%'
           })
       }else{
             gsap.to(panelRef.current,{
               height:'0%'
              })   
       }
    },[panelOpen]);

    // animation for vehichal panel
    useGSAP(function(){
        if(vehicalPanel){
            gsap.to(vehicalRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(vehicalRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicalPanel]);
    
    // Animation for ride
    useGSAP(function(){
        if(conformRide){
            gsap.to(conformRideRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(conformRideRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[conformRide]);
    
    // Animation for looking for driver
    useGSAP(function(){
        if(vehicleFound){
               gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0%)'
               }) 
        }else{
             gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)'
             })
        }
    },[vehicleFound]);

    // Animation for waiting for driver
    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(0%)'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)'
            })    
        }
    },[waitingForDriver]);

    return(
        <div className="relative h-screen">
            <img className="w-16 absolute pl-5 pt-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
            <div className="h-screen w-screen">
               <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map image" />
            </div>
            <div className="flex flex-col justify-end h-screen absolute w-full top-0">
                <div className="bg-white h-[30%] p-5 relative">
                    {panelOpen && <RiArrowDownWideLine className='absolute right-6 top-6 text-2xl' 
                      onClick={()=>setpanelOpen(false)}
                    />}
                    
                    
                   <h3 className="text-2xl font-semibold mb-5">Find a Trip</h3>
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

                      <input className="bg-slate-200 text-base rounded-lg px-12 py-2 w-full mb-3" 
                            value={Destination}
                            onClick={()=>setpanelOpen(true)}
                            onChange={(e)=>setDestination(e.target.value)}
                            type="text" 
                            placeholder="Enter your Destination" />
                    </form>
                </div>
                <div className="bg-white h-0 p-4" ref={panelRef}>
                    {panelOpen && 
                         <LocationSearch
                            className=" h-0 ml-4" 
                            setVehicalPanel={setVehicalPanel}
                            setpanelOpen={setpanelOpen}
                          />}
                </div>
            </div>
           
           {/* vehicalPanel */}
            <div ref={vehicalRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
               <VehiclePanel setVehicalPanel={setVehicalPanel} setConformRide={setConformRide}/>
            </div>
            {/* confrom ride */}
            <div ref={conformRideRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
               <ConformRide setConformRide={setConformRide} setVehicleFound={setVehicleFound}/>
            </div>
            {/* looking for a Driver */}
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
               <LookingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div> 

            {/*  Animation for waiting for driver */}
            <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
               <WaitingForDriver/>
            </div>
        </div>
    )
}