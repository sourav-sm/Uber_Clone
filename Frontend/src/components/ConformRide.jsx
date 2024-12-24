import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaSquare } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";


const ConformRide = (props) => {
  
  return (
    <div>
       <h5 className='flex justify-center items-center mb-2 p-2 text-2xl'
        onClick={()=>{
            props.setVehicalPanel(false);
          }}>
         <FaChevronDown  />
        </h5>

        <h3 className='text-2xl font-semibold mb-3'>Conform Your Ride</h3>
        <div className='flex gap-2 justify-between  flex-col items-center active:border-black border-2 p-2 rounded-lg mb-4'>
          <img className='h-20' src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="car image"/>
          <div className='px-3 flex flex-col gap-4 mt-3 font-semibold'>
             <div className='flex justify-center items-center gap-3 border-b-2 pb-2'>
               <h3 className='text-2xl'>
                  <IoLocationSharp/>
               </h3>
                <p>Hall3, NIT Durgapur, A zone, Durgapur, West Bengal</p>
             </div>
             <div className='flex justify-center items-center gap-3 border-b-2 pb-2'>
               <h3 className='text-xl'>
                  <FaSquare/>
               </h3>
                <p>Balurghat Railway Station,Balurghat, Dakshin Dinajpur, West Bengal</p>
             </div>
             <div className='flex items-center gap-3 border-b-2 pb-2'>
               <h3 className='text-xl'>
                  <BsCreditCardFill/>
               </h3>
               <div className='flex flex-col gap-1'>
                 <div className='flex items-center font-semibold text-2xl'>
                   <MdCurrencyRupee/>
                   <h2>193.20</h2>
                 </div>
                 <h2 className='text-base font-medium pl-2'>Cash Cash</h2>
               </div>
             </div>
          </div>
          <button 
            onClick={()=>{
              props.setVehicleFound(true),
               props.setConformRide(false)
            }}
             className='mt-3 bg-black text-white font-semibold text-xl  px-5 py-3 rounded-lg '>Confirm</button>
        </div>
    </div>
  )
}

export default ConformRide;