import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";


function CaptainDetails() {
  return (
    <div className="p-4">
        <div className='flex justify-between items-center gap-4'>
            <div className='pl-4'>
              <img className='h-16 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/035/544/575/small_2x/ai-generated-cheerful-black-man-looking-at-camera-isolated-on-transparent-background-african-american-male-person-portrait-png.png' alt='driver-Img'/>
              <h4 className="font-bold text-lg">Harsh Patel</h4>
            </div>
            <div className="pr-4">
                <div className='flex items-center font-semibold text-xl'>
                    <MdCurrencyRupee/>
                    <h2>193.20</h2>
                </div>
                <h4 className="font-semibold text-lg">Earned</h4>
            </div>
        </div>
        <div className="flex gap-4 justify-between bg-gray-200 mt-4 p-4">
            <div className="flex flex-col items-center gap-2 ">
                <AiOutlineClockCircle className="text-4xl"/>
                <h4 className="font-bold text-2xl">10.2</h4>
                <h5 className="font-normal text-base">Hours Online</h5>
            </div>
            <div className="flex flex-col items-center gap-2">
                <AiOutlineClockCircle className="text-4xl"/>
                <h4 className="font-bold text-2xl">10.2</h4>
                <h5 className="font-normal text-base">Hours Online</h5>
            </div>
            <div className="flex flex-col items-center gap-2">
                <AiOutlineClockCircle className="text-4xl"/>
                <h4 className="font-bold text-2xl">10.2</h4>
                <h5 className="font-normal text-base">Hours Online</h5>
            </div>
        </div>
     </div>
  )
}

export default CaptainDetails


