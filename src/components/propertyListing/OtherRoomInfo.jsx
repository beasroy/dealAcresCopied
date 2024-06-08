import React from 'react';

const OtherRoomInfo = ({  roomtype }) => {
  return (
    <div className="relative mt-4 custom-border px-4 pt-6 pb-1 w-[95%] rounded-lg">
        <div className='absolute text-xs top-0 w-full h-6 left-0  bg-[#c7e3f6] '>
            <p className='text-center mt-0.5'>Specify {roomtype} sizes - For example 12x10 ft</p>
        </div>
      <table className='w-full mt-2'>
        <thead className='px-4'>
          <tr>
            <th></th>
            <th>Length </th>
            <th></th>
            <th>Breadth </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='px-4'>

            <tr >
              <td className='w-[35%]'>{roomtype}</td>
              <td>
                <input
                
                  type="text"
                  className="custom-border py-1 px-2 mb-2 rounded-md w-full"
                />
              </td>
              <td className='w-[5%]'></td>
              <td>
                <input
                 
                  type="text"
                  className="custom-border py-1 px-2 mb-2 rounded-md w-full"
                />
              </td>
              <td className='w-[5%]'></td>
              <td>ft</td>
            </tr>
       
        </tbody>
      </table>
    </div>
  );
};

export default OtherRoomInfo;
