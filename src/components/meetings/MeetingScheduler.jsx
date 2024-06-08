'use client'

import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import MeetCalendar from './new/MeetCalendar'
import MeetAgentInfo from './new/MeetAgentInfo'
import ContactDetails from '../ContactUs/ContactDetails'
import AgentContactForm from '../single-agent-page/AgentContactForm'
import MeetAttendeForm from './new/MeetAttendeForm'
import MeetTime2 from './new/MeetTime2'
import NewMeetTime from './new/NewMeetTime'

const MeetingScheduler = () => {

  const [selectedDate, setSelectedDate] = useState(new Date().toString());
  const [time, setTime] = useState(null)

  const [showCal, setShowCal] = useState(true);

  const triggerDateChange = (value) => {
    setSelectedDate(value.toString())

  }
  

  const handleTimeChange = (value) => {
    setTime(value);


  }

  useEffect(() => {

    if (!time) {
      setTimeout(() => {
        setShowCal(true)
      }, 300)
    } else {
      setTimeout(() => {
        setShowCal(false)
      }, 650)
    }
  }, [time])

  return (
    <div className='grid md:grid-cols-12 max-w-screen-lg mx-2 md:mx-auto py-4 gap-4 md:gap-0 border overflow-hidden bg-white transition-all duration-1000 border-gray-400 rounded-xl shadow'>
      <div className='md:col-span-3 px-4 transition-all col-span-1'>
        <MeetAgentInfo selectedDetails={(selectedDate && time) && { date: selectedDate, time: parseInt(time.split(":")[0]) % 12 + ":"  + time.split(":").slice(1).join("") }} />
      </div>
      {showCal && <div className={`col-span-1 md:col-span-9 grid grid-cols-9 relative  `}>
        {<div className={`col-span-6 px-4 flex justify-center transition-all
        delay-300 
        duration-300
      
        origin-left ${time && 'scale-x-0 invisible '} 
        
        ${!time && '!delay-[10000ms] scale-x-100 visible'} `}>
          <MeetCalendar triggerDateChange={triggerDateChange} />
        </div>}

        {<div className={`relative col-span-3  transition-all `}>
          <div className={` px-2 md:px-4 transition-all  origin-left  duration-300
          
          ${time ? 'scale-x-0 invisible absolute left-0 ' : 'scale-x-100 visible static'} max-h-[300px] md:max-h-[400px] overflow-y-auto`} >
            <NewMeetTime selectedDate={selectedDate && selectedDate.split(' ').slice(0, 4).join(' ')}
              triggerTimeSelected={handleTimeChange}
            />
          </div>
        </div>}
      </div>}

      {

        <div className={`transition-all  origin-left
          duration-[300ms]
          absolute
          ${time && 'delay-[700ms] scale-x-100 opacity-100 visible col-span-1 md:col-span-9'} 

          ${!showCal && '!static'}
          
          ${!time && 'scale-x-0 scale-y-0 opacity-0 invisible absolute'}
          
          `}>
          <MeetAttendeForm goBack={() => setTime(null)} />
        </div>

      }
    </div>
  )
}

export default MeetingScheduler