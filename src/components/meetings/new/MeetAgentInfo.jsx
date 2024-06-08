import React from 'react'
import {RxAvatar} from 'react-icons/rx'
import {BiCalendar, BiLogoZoom} from 'react-icons/bi'

const MeetAgentInfo = ({
    selectedDetails
}) => {

    
  return (
    <div className='w-full border-r border-r-gray-300 flex flex-col gap-2 h-full py-2 px-4 items-center md:items-start '>
        <div className='flex flex-col items-center md:items-start'>
            <span className=''>
                <RxAvatar size={30}/>
            </span>
            <span className='text-gray-600 text-lg font-semibold'>
                Sanya Bansal
            </span>
        </div>

        <div className='flex gap-2 items-center'>
            <span className='text-blue-600'>
            <BiLogoZoom size={25}/>
            </span>
            <span>
                Zoom Video
            </span>
        </div>

        {
            selectedDetails && <div className='flex flex-row gap-2 text-sm ' >
                <span className='flex'>
                <BiCalendar size={20}/>
                </span>

                <span className='flex flex-col'>
                {selectedDetails.date.split(' ').slice(0, 4).join(' ')}
                <span>
                {selectedDetails.time}
                </span>
                </span>

            </div>
        }
    </div>
  )
}

export default MeetAgentInfo
