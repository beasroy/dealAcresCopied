import MeetingScheduler from '@/components/meetings/MeetingScheduler'
// import TimeScheduler from '@/components/meetings/TimeScheduler' 
import React from 'react'
import '@/components/meetings/meetings.css'

const ScheduleMeeting = () => {
  return (
    <div className='min-h-[calc(100vh-80px)] flex items-center justify-center pt-4 bg-blue-100/40'>
      <div className=''>
      {/* <TimeScheduler/>  */}

      <MeetingScheduler/>
      </div>
    </div>
  )
}

export default ScheduleMeeting
