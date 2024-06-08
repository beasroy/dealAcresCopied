import React from 'react';

const RoomInfo = ({ roomCount, roomtype }) => {
  return (
    <div className="relative mt-4 custom-border px-4 max-md:py-6 md:pt-6 md:pb-1 w-full sm:w-[85%] rounded-lg">
        <div className='absolute text-xs top-0 w-full h-6 left-0  bg-[#f1f6fd] '>
            <p className='text-center md:mt-0.5'>Specify {roomtype} sizes - For example 12x10 ft</p>
        </div>
      <table className='w-full mt-2'>
        <thead className='px-4 text-sm md:text-base'>
          <tr>
            <th></th>
            <th>Length </th>
            <th></th>
            <th>Breadth </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='px-4 text-xs md:text-sm'>
          {[...Array(roomCount)].map((_, index) => (
            <tr key={index} >
              <td className='w-[35%]'>{roomtype} {index + 1}</td>
              <td>
                <input
                  key={index}
                  type="text"
                  className="custom-border py-1 px-2 mb-2 rounded-md w-full text-xs xs:text-sm sm:text-base "
                />
              </td>
              <td className='w-[5%]'></td>
              <td>
                <input
                  key={index}
                  type="text"
                  className="custom-border py-1 px-2 mb-2 rounded-md w-full text-xs xs:text-sm sm:text-base "
                />
              </td>
              <td className='w-[5%]'></td>
              <td>ft</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomInfo;
