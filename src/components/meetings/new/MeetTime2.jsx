import React, { useState } from 'react';

const MeetTime2 = ({
    selectedDate,
    triggerTimeSelected
}) => {
    let count = 0;
    let availStart = 9;
    let availEnd = 17;

    // const [showFull, setShowFull] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeChange = (index) => {
        const selectedTimeString = (index % 2 === 0 ? Math.floor(index / 2) + 1 : Math.floor(index / 2)  + 1) +
            (index % 2 === 0 ? ":00" : ":30") +
            (index % 24 < 12 ? ' AM' : ' PM');

        setSelectedTime(selectedTimeString);

        setTimeout(() => {
            triggerTimeSelected(selectedTimeString);
        }, 400);
    };

    return (
        <div className=''>
            <div className='font-bold text-lg'>
                {selectedDate}
            </div>
            <div className='py-2 flex flex-row md:flex-col max-md:flex-nowrap gap-4 overflow-x-auto md:overflow-y-auto md:h-[400px]'>
                {[...Array(24)].map((_, time) => {
                   
                    if (time + 1 >= availStart && time + 1 <= availEnd) {
                        count += 1;
                        const index = time * 2;
                        return (
                            <div key={time}>
                                <button
                                    key={index}
                                    className={`w-full flex items-center justify-center rounded-lg shadow transition hover:bg-blue-100 font-semibold border border-gray-400 py-2 
                                    ${selectedTime === index && 'bg-black hover:bg-black text-white'}
                                    `}
                                    value={index}
                                    onClick={() => handleTimeChange(index)}
                                >
                                    {time + 1}:00 {time + 1 === 12 ? 'PM' : 'AM'}
                                </button>
                                {time + 1 !== availEnd && (
                                    <button
                                        key={index + 1}
                                        className={`w-full mt-4 flex items-center justify-center rounded-lg shadow transition hover:bg-blue-100 font-semibold border border-gray-400 py-2
                                        ${selectedTime === index + 1 && 'bg-black hover:bg-black text-white'}
                                        `}
                                        onClick={() => handleTimeChange(index + 1)}
                                        value={index + 1}
                                    >
                                        {time + 1}:30 {time + 1 === 12 ? 'PM' : 'AM'}
                                    </button>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
                {/* <div className='w-full text-center '>
                    <span className='font-bold text-blue-500 text-lg cursor-pointer' onClick={() => setShowFull(prev => !prev)}>
                        View {showFull ? 'Less' : 'More'} Timings
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default MeetTime2;