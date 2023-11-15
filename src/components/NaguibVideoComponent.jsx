import React from 'react'
import naguibVideo from "../assets/naguib_video.mp4"
import NaguibLocation from './NaguibLocation'

const VideoComponent = () => {
    return (
        <div className='flex flex-row items-center text-center justify-center '>
            <div>
                <NaguibLocation />
            </div>
            <div className='w-5/6'>
                <video className=" shadow-lg " autoPlay loop controls muted>
                    <source
                        src={naguibVideo}
                        type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default VideoComponent