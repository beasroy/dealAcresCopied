import React, { useState } from 'react';

const NewMeetTime = ({
    selectedDate,
    triggerTimeSelected
}) => {

    let count = 0;
    let availStart = 9;
    let availEnd = 17;

    const [showFull, setShowFull] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeChange = (index) => {
        const selectedTimeString = (index % 2 === 0 ? Math.floor(index / 2) + 1 : Math.floor(index / 2) + 1) +
            (index % 2 === 0 ? ":00" : ":30") +
            (index >= 22 ? ' PM' : ' AM');

        setSelectedTime(selectedTimeString);

        setTimeout(() => {
            triggerTimeSelected(selectedTimeString);
        }, 400);
    };
    return (
        <div className=' self-start'>
            <div className='font-bold text-sm sm:text-base md:text-lg'>
                {selectedDate}
            </div>
            <div className='py-2 flex flex-col md:flex-col gap-4'>
                {[...Array(24)].map((_, time) => {
       
                    if (time + 1 >= availStart && time + 1 <= availEnd) {
                        count += 1; //keep track of no of buttons*2 displayed
                        const index = time * 2;
                        return (
                            <div key={time} className=' gap-4 items-center '>
                                <button

                                    className={`w-full  max-md:whitespace-nowrap flex items-center justify-center rounded-lg shadow transition hover:bg-blue-100 font-semibold border border-gray-400 max-md:px-4 max-md:py-1 max-md:text-sm md:py-2 
                            ${selectedTime === index && 'bg-black hover:bg-black text-white'}
                            `}
                                    value={index}
                                    onClick={() => handleTimeChange(index)}
                                >
                                    {((time + 1) % 12 === 0 ? 12 : (time + 1) % 12)}:00 {time + 1 >= 12 ? 'PM' : 'AM'}
                                </button>
                                {time + 1 !== availEnd && (
                                    <button

                                        className={`w-full  max-md:whitespace-nowrap mt-4 flex items-center justify-center rounded-lg shadow transition hover:bg-blue-100 font-semibold border border-gray-400 max-md:px-4 max-md:py-1 max-md:text-sm md:py-2
                                ${selectedTime === index + 1 && 'bg-black hover:bg-black text-white'}
                                `}
                                        onClick={() => handleTimeChange(index + 1)}
                                        value={index + 1}
                                    >
                                        {((time + 1) % 12 === 0 ? 12 : (time + 1) % 12)}:30 {time + 1 >= 12 ? 'PM' : 'AM'}
                                    </button>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
       
        </div>
    )
}

export default NewMeetTime
