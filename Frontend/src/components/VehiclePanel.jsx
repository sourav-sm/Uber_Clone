import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

export default function VehiclePanel(props){
  return (
    <div>
        <h5 className='flex justify-center items-center mb-2 p-2 text-2xl'
                onClick={()=>{
                    props.setVehicalPanel(false);
                  }}
                  >
                      <FaChevronDown  />
                    </h5>

                <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
                {/* car */}
                <div 
                onClick={()=>{props.setConformRide(true)}}
                className='w-full flex items-center justify-between active:border-black border-2 p-2 rounded-lg mb-4'>
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
                <div onClick={()=>{props.setConformRide(true)}}
                className='w-full flex items-center justify-between active:border-black border-2 p-2 rounded-lg mb-4'>
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
                <div onClick={()=>{props.setConformRide(true)}} 
                className='w-full flex items-center justify-between active:border-black border-2 p-2 rounded-lg'>
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
  )
}
