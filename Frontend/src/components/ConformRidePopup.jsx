import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaSquare } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function ConformRidePopup(props) {
    const [OTP, setOTP] = React.useState('');
    const submithandler = (e) => {
       e.preventDefault();
    }  

    return (
      <div className='p-4'onClick={()=>{
          props.setRidePopup(false)
        }} >
       <h3 className='text-2xl font-semibold mb-3'>Confirm this ride to Start</h3>
        <div className='flex gap-2 justify-between  flex-col  active:border-black border-2 p-2 rounded-lg mb-4'>
                    
          <div className='flex justify-around bg-yellow-400 items-center gap-4'>
              <div className=''>
                <img className='h-16 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/035/544/575/small_2x/ai-generated-cheerful-black-man-looking-at-camera-isolated-on-transparent-background-african-american-male-person-portrait-png.png' alt='driver-Img'/>
                <h4 className="font-bold text-lg">Harsh Patel</h4>
              </div>
              <div className="pr-4">
                  <h4 className="font-semibold text-lg">2.2 KM</h4>
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
                <p>Durgapur Railway Station,Durgapur,West Bengal</p>
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
          <form onSubmit={(e)=>{
            submithandler(e);
            }} 
          className='px-4 mt-4 '>
            <input onChange={(e)=>setOTP(e.target.value)} type="text" placeholder="Enter OTP" className='w-full p-3 border-2 bg-gray-100 rounded-lg placeholder:text-xl font-semibold'/>
          </form>
          <div className='flex gap-2 justify-center'>
            <Link to={"/captain-riding"} 
               className='mt-3 bg-green-600 text-white font-semibold text-xl  px-5 py-3 rounded-lg '>Confirm</Link>
            <button onClick={()=>{
                props.setRidePopup(false),
                props.setConfirmRidePopup(false);
            }}
            className='mt-3 bg-red-600 text-white font-semibold text-xl  px-5 py-3 rounded-lg '>Cancel</button>  
          </div>
        </div>
    </div>
  )
}

export default ConformRidePopup


