import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaSquare } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";

function WaitingForDriver() {
  return (
    <div className='mt-5'>
          <div className='flex gap-2 justify-between  flex-col items-center active:border-black border-2 p-2 rounded-lg mb-4'>
              <div className='flex justify-between items-center w-full'>
                 <div className='flex  gap-2'>
                  <img className='h-10' src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="car image"/>
                   <img className='h-10' src='https://static.vecteezy.com/system/resources/thumbnails/035/544/575/small_2x/ai-generated-cheerful-black-man-looking-at-camera-isolated-on-transparent-background-african-american-male-person-portrait-png.png' alt='driver-Img'/>
                 </div>   
                 <div className='text-lg font-semibold'>
                    <h3>Tusher Das</h3>
                    <h4>WB 62 8906</h4>
                    <h5>ncndn</h5>
                 </div>  
              </div>
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
          </div>
    </div>  
  )
}

export default WaitingForDriver