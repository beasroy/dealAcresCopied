'use client'
import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';

const MeetCalendar = ({
    triggerDateChange
}) => {

    const [date, setDate] = useState(new Date());
    
    const handleDateChange = (value) => {
        setDate(value);
        triggerDateChange(value);
    }

   
    return (
        <div className='py-2 border-r border-r-gray-300 flex items-center justify-center w-full max-sm:max-w-[300px] max-sm:mx-auto  '>

            <div className='self-start'>
            <Calendar value={date} onChange={handleDateChange} />

            </div>
        </div>
    )
}

export default MeetCalendar
