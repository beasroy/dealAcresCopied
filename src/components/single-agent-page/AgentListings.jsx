'use client'

import React from 'react'
import { useState } from 'react'
import ListingCard from './ListingCard'


const AgentListings = (
    {
        forRentListings,
        forSaleListings
    }
) => {

    const [selectedTab, setSelectedTab] = useState('sale')
    return (
        <div className='w-full md:w-[85%] mx-auto grid grid-cols-8 place-content-center content-center items-center justify-center'>
            <div className={`
            sm:self-center
            col-span-3 flex gap-4 sm:gap-0 flex-col pr-2 items-start sm:items-center justify-around sm:justify-center transition-all after:transition-all  border-b-0 border-r-2 border-black relative after:absolute ${selectedTab === 'sale' ? 'after:left-auto after:top-0' : 'after:left-auto after:top-[55%]'} 
           after:-right-[0px] after:top-0 after:h-[40%] after:w-1 after:bg-blue-700 after:rounded`}>
                <div className={`py-4 `}>
                    <h3 className={`font-bold text-xl md:text-3xl cursor-pointer
                    ${selectedTab === 'sale' ? 'text-blue-600' : 'text-black'}`} onClick={() => setSelectedTab('sale')} >
                        For Sale
                    </h3>
                    <p className='break-keep flex flex-col text-[10px] xs:text-xs  sm:text-base whitespace-nowrap ' >
                        <span className='break-keep '>
                            Residential Properties
                        </span>
                        <span className='break-keep'>
                            Commercial Properties
                        </span>

                    </p>
                </div>
                <div className='py-4'>
                    <h3 className={`font-bold text-xl md:text-3xl cursor-pointer
                    ${selectedTab === 'rent' ? 'text-blue-600' : 'text-black'}`} onClick={() => setSelectedTab('rent')}>
                        For Rent
                    </h3>
                    <p className='break-keep flex flex-col text-[10px] xs:text-xs sm:text-base ' >
                        <span className='break-keep '>
                            Residential Properties
                        </span>
                        <span className='break-keep'>
                            Commercial Properties
                        </span>

                    </p>
                </div>

            </div>

            <div className='col-span-5 max-h-[350px] overflow-y-auto py-2'>
                {
                    selectedTab === 'sale' ? forSaleListings.map((listing, index) => (
                        <span key={index}>
                            <ListingCard
                                img={listing.img}
                                title={listing.title}
                                price={listing.price}
                                date={listing.date}
                            />
                        </span>
                    )) : forRentListings.map((listing, index) => (
                        <span key={index}>
                            <ListingCard
                                img={listing.img}
                                title={listing.title}
                                price={listing.price}
                                date={listing.date}
                            />
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default AgentListings
