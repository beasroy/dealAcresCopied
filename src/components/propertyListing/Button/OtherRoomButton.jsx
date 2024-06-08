'use client'
import React, { useState } from 'react';
import OtherRoomInfo from '../OtherRoomInfo';

const OtherRoomButton = () => {
  const roomTypes = ['Pooja Room', 'Study Room', 'Servant Room', 'Store Room'];
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleButtonClick = (roomType) => {
    setSelectedRoom(selectedRoom === roomType ? null : roomType);
  };

  return (
    <>
      <div className='flex flex-wrap gap-2'>
        {roomTypes.map((roomType) => (
          <div key={roomType}>
            <button
              className={`h-full py-2 px-3 rounded-md ${selectedRoom === roomType ? 'bg-blue-500 text-white' : 'bg-[#c9e0ee]'}`}
              onClick={() => handleButtonClick(roomType)}
            >
              {roomType}
            </button>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div>
          <OtherRoomInfo roomtype={selectedRoom} />
        </div>
      )}
    </>
  );
};

export default OtherRoomButton;



