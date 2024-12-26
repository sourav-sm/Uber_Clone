import React from 'react'
import { useRef,useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

function CaptainRiding() {
    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])

  return (
    <div className="h-screen">
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" />
            </div>
            <div className='h-[80%]'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className='h-[20%] bg-yellow-400 flex  justify-center items-center gap-4'
                onClick={() => {
                    setFinishRidePanel(true)
                }}>
                <h4 className='text-2xl font-bold'>4 KM away</h4>
                <button className='bg-green-600 text-white font-semibold text-xl  px-5 py-3 rounded-lg '>Complete Ride</button>
            </div>
            <div>
                FinsishRide
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide
                  setFinishRidePanel={setFinishRidePanel}
                />
            </div>
       </div> 
  )
}

export default CaptainRiding