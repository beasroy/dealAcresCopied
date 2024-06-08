import Image from 'next/image'
import React from 'react'
import { IoMdHome } from 'react-icons/io'

const ExploreCard = ({card}) => {
    return (
        <div
            key={card.id}
            className="rounded-xl shadow  py-4 px-4 sm:text-lg grid grid-rows-7  items-center flex-col gap-4 min-w-[200px] min-[400px]:min-w-[250px] min-[740px]:min-w-[250px]"
            style={{
                backgroundColor: card.color
            }}
   
        >

       <div className='  flex justify-center row-span-2 '>
       <div className='rounded-full flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow bg-white'>
               <IoMdHome size={50}/>
            </div>
       </div>

            
            <div className="text-center row-span-4">
                {card.description}
            </div>
            
            <h3 className="text-center font-bold text-xl row-span-1  ">
                {card.title}
            </h3>
        </div>
    )
}

export default ExploreCard
