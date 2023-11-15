import React from 'react'
import VideoComponent from './NaguibVideoComponent'
import NaguibAdvantages from './NaguibAdvantages'
import NaguibLocation from './NaguibLocation'
import naguibHeader from "../assets/naguib_home.png"
const ElHammam = () => {
    return (
        <div>
            <div>
                <img src={naguibHeader} className="w-full bg-100" />
            </div>
            <div className='justify-center mb-10'>
                <div className='flex flex-col items-center content-center text-center mx-10'>
                    <NaguibAdvantages />
                    <VideoComponent />
                    {/* <NaguibLocation /> */}
                </div>
            </div>
        </div>
    )
}

export default ElHammam