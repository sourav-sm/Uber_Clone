import React,{useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { RiArrowDownWideLine } from "react-icons/ri";
import LocationSearch from '../components/locationSearch';
import { FaUser } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
    const [Pickup,setPickup]=useState('');
    const [Destination,setDestination]=useState('');
    const [panelOpen,setpanelOpen]=useState(false);
    const panelRef=useRef(null);
    const vehicalRef=useRef(null);  
    const [vehicalPanel,setVehicalPanel]=useState(false);
    
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
                    {/* <RiArrowDownWideLine className='absolute right-6 top-6 text-2xl' 
                      ref={closeRef}
                      onClick={()=>setpanelOpen(false)}
                    /> */}
                    
                    
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

            <div ref={vehicalRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
            <h5 className='flex justify-center items-center mb-2 p-2 text-2xl'
                onClick={()=>{
                    setVehicalPanel(false);
                  }}
                  >
                      <FaChevronDown  />
                    </h5>

                <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
                {/* car */}
                <div className='w-full flex items-center justify-between active:border-black border-2 p-2 rounded-lg mb-4'>
                    <img className='h-10' src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="car image"/>
                    <div className=' w-1/2'>
                        <h4 className='flex font-medium text-base gap-4'>UberGo
                            <span className='flex items-center gap-1'>
                                <FaUser/>
                                4
                            </span>
                        </h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-medium text-sm'>Affordable, compact rides</p>
                    </div>
                    <div className='flex items-center font-semibold text-xl'>
                       <MdCurrencyRupee/>
                       <h2>193.20</h2>
                    </div>
                </div>
                {/* auto */}
                <div className='w-full flex items-center justify-between active:border-black border-2 p-2 rounded-lg mb-4'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Auto image"/>
                    <div className=' w-1/2'>
                        <h4 className='flex font-medium text-base gap-4'>UberAuto
                            <span className='flex items-center gap-1'>
                                <FaUser/>
                                3
                            </span>
                        </h4>
                        <h5 className='font-medium text-sm'>4 mins away</h5>
                        <p className='font-medium text-sm'>Affordable, Auto rides</p>
                    </div>
                    <div className='flex items-center font-semibold text-xl'>
                       <MdCurrencyRupee/>
                       <h2>119.20</h2>
                    </div>    
                </div>
                {/* bike */}
                <div className='w-full flex items-center justify-between active:border-black border-2 p-2 rounded-lg'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Bike image"/>
                    <div className=' w-1/2'>
                        <h4 className='flex font-medium text-base gap-4'>UberBike
                            <span className='flex items-center gap-1'>
                                <FaUser/>
                                1
                            </span>
                        </h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-sm'>Affordable, bike rides</p>
                    </div>
                    <div className='flex items-center font-semibold text-xl'>
                       <MdCurrencyRupee/>
                       <h2>63.20</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}