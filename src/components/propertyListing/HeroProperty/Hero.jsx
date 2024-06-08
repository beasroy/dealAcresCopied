'use client';
import React, { useEffect } from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import FREE from '../../../../public/propertyListing/hero.png'
import BannerLayout from '../BannerLayout';
import MobileButton from '../Button/MobileButton';


const tagText = [
    'Advertise For FREE',
    'Sell 10 X faster',
    'Connect with genuine buyers',
    'Get unlimited enquiries'

]

const Hero = () => {

    const [isResedentialClicked, setIsResedentialClicked] = useState(false);
    const [isCommercialClicked, setCommercialClicked] = useState(false);
    const [isFiveClicked, setIsFiveClicked] = useState(false);
    const [propertyType, setPropertyType] = useState('#');
    const [subType, setSubType] = useState('');
    const [isSellClicked, setIsSellClicked] = useState(false);
    const [isRentClicked, setIsRentClicked] = useState(false);

    const handleSell = () =>{
        setIsSellClicked(true)
        setIsRentClicked(false)
    }
    const handleRent = () =>{
        setIsRentClicked(true)
        setIsSellClicked(false)
    }
 

    const [index, setIndex] = useState(0)
    const [tagIndex, setTagIndex] = useState(0);
    const [tag, setTag] = useState(tagText[0]);

    let id;
    const typeAnimation = () => {
        const tagToType = tagText[tagIndex];
        // const totalTime = tagToType.length * 100; // Adjust the interval duration as needed

        let currentIndex = 0;
        id = setInterval(() => {
            setIndex(currentIndex++);
            if (tagToType) {
                if (currentIndex >= tagToType.length) {
                    clearInterval(id);
                    setTimeout(() => {
                        if (tagIndex < tagText.length - 1) {
                            setTagIndex(prev => prev + 1);
                            setTag(tagText[tagIndex + 1])
                        } else {
                            setTagIndex(0); // Reset to the first tag if reached the end
                            setTag(tagText[0])
                        }
                    }, 1000); // Wait for 1 second before switching to the next tag
                }
            }
        }, 100); // Interval duration set to 100 milliseconds
    };



    console.log(tagIndex, "tagINdex")
    console.log(index, "index")



    useEffect(() => {



        typeAnimation();


    }, [tagIndex])

    const handleFive = () => {
        setIsFiveClicked(!isFiveClicked);
    }
    const handleResedential = () => {
        setIsResedentialClicked(true);
        setCommercialClicked(false)
        setPropertyType('residential');
        setSubType('');
    }
    const handleCommercial = () => {
        setCommercialClicked(true);
        setIsResedentialClicked(false)
        setPropertyType('commercial');
        setSubType('');
    }
    const handleSubType = (subtype) => {
        setSubType(subtype.toLowerCase());
    };
    const generateDynamicPath = () => {


        let path = `propertylisting/${propertyType}`;

        if (propertyType === '#') return path;
        if (subType) {
            path += `/${subType}`;
        }
        path += '/login';
        return path;
    };

    
    return (
        <section className='flex flex-col md:flex-row md:px-4 items-start justify-center gap-8 container mx-auto md:my-8  '>
            <div className=' md:mt-8 rounded-xl pt-2 px-3 md:border-4 md:border-blue-200 text-start md:shadow-md md:shadow-blue-200'>
                <div className='md:h-fit'>
                <h1 className="font-medium md:font-bold text-[1.3rem] uppercase mt-2 hidden md:block">
                    Post Your Property for free
                </h1>
                <p className='hidden md:block'>
                    Add Basic Details
                </p>
                <p className='py-2 md:py-1.5 md:mt-1 font-bold'>
                    Looking For..........
                </p>
                <div className='hidden md:flex gap-3 items-center md:mb-0.5'>
                <Button heading={'Sell'} onClick={handleSell} isActive={isSellClicked} hashClick={true}/>
                <Button heading={'Rent'} onClick={handleRent} isActive={isRentClicked} hashClick={true}/>
                </div>
                <div className='md:hidden flex gap-3 items-center md:mb-0.5'>
                <Button heading={'Sell'} isOption={true}/>
                <Button heading={'Rent'} isOption={true}/>
                </div>
                <p className='py-1.5 font-bold'>
                    Property Type
                </p>
                <div className='hidden md:flex gap-3 items-center md:mb-0.5'>
                    <Button heading={'Residential'} onClick={handleResedential} hashClick={true} isActive={isResedentialClicked}/>
                    <Button heading={'Commercial'} onClick={handleCommercial} hashClick={true} isActive={isCommercialClicked} />
                </div>
                <div className='md:hidden flex gap-3 items-center md:mb-0.5'>
                    <MobileButton heading={'Residential'} isOption={true}/>
                    <MobileButton heading={'Commercial'} isOption={true} />
                </div>

                {isResedentialClicked && (
                    <div className='flex flex-col gap-1 md:gap-0 xs:gap-2 mt-2 md:mt-0'>
                        <div className='hidden md:flex flex-row gap-1 xs:gap-2 md:gap-0 md:w-[50%]'>
                            <Button heading={'Flat/Apartment'}  px="3" textBase="sm" />
                            <Button heading={'villa'}  px="3" textBase="sm" />
                            <Button heading={'plot'} onClick={() => handleSubType('Plot')} hashClick={true}  px="3" textBase="sm"  />

                        </div>
                        <div className='md:hidden flex flex-row gap-1 xs:gap-2 md:gap-0 md:w-[50%]'>
                            <MobileButton heading={'Flat/Apartment'} isOption={true}   />
                            <MobileButton heading={'villa'} isOption={true}/>
                            <MobileButton heading={'plot'} onClick={() => handleSubType('Plot')} isOption={true}   />

                        </div>
                        <div className='hidden md:flex flex-row gap-1 xs:gap-2'>
                            <Button heading={'Independent House'}  px="3" textBase="sm"  />
                            <Button heading={'Builder Floor'}  px="3" textBase="sm" />
                        </div>
                        <div className='md:hidden max-md:flex flex-row gap-1 xs:gap-2'>
                            <MobileButton heading={'Independent House'} isOption={true}   />
                            <MobileButton heading={'Builder Floor'} isOption={true}  />
                        </div>
                    </div>
                )}
                {isCommercialClicked && (
                    <div className='flex flex-col mt-2'>
                        <div className='hidden md:flex flex-row max-md:items-center'>
                            <Button heading={'Commercial Shop'} px="3" textBase="sm"  />
                            <Button heading={'Commercial Office Space'} px="3" textBase="sm"  />

                        </div>
                        <div className='md:hidden flex flex-row max-md:items-center'>
                            <MobileButton heading={'Commercial Shop'} isOption={true} />
                            <MobileButton heading={'Commercial Office Space'} isOption={true}  />

                        </div>
                        <div className='hidden md:flex flex-row items-center max-md:flex-wrap'>
                            <Button heading={'Commercial Showroom'}  px="3" textBase="sm"  />
                            <Button heading={'Commercial Land'}  px="3" textBase="sm"  />
                            <p className='font-bold text-blue-600 cursor-pointer' onClick={handleFive}>+5</p>
                        </div>
                        <div className='md:hidden flex flex-row items-center max-md:flex-wrap'>
                            <MobileButton heading={'Commercial Showroom'}  />
                            <MobileButton heading={'Commercial Land'}  />
                            <p className='font-bold text-blue-600 cursor-pointer' onClick={handleFive}>+5</p>
                        </div>
                    </div>
                )}
                {isFiveClicked && (
                    <div className='flex flex-col '>
                        <div className='hidden md:flex flex-row max-md:items-center'>
                            <Button heading={'Warehouse/ Godown'} px="3" textBase="sm" />
                            <Button heading={'Industrial Land'} px="3" textBase="sm" />


                        </div>
                        <div className='md:hidden flex flex-row max-md:items-center'>
                            <MobileButton heading={'Warehouse/ Godown'} isOption={true} />
                            <MobileButton heading={'Industrial Land'} isOption={true} />


                        </div>
                        <div className='hidden md:flex flex-row items-center'>
                            <Button heading={'Industrial Building'} px="3" textBase="sm" />
                            <Button heading={'Industrial Shed'} px="3" textBase="sm"  />
                            <Button heading={'Office in IT Park/ SEZ'} px="3" textBase="sm" />
                        </div>
                        <div className='md:hidden flex flex-row items-center'>
                            <MobileButton heading={'Industrial Building'} isOption={true} />
                            <MobileButton heading={'Industrial Shed'} isOption={true}   />
                            <MobileButton heading={'Office in IT Park/ SEZ'} isOption={true} />
                        </div>
                    </div>
                )}
                <p className='py-1 font-bold'>
                    Add Contact Details
                </p>
                
                <input className='custom-border-2 px-4 py-1 rounded-xl max-md:w-full' />
                <p className='text-xs mt-2 md:mt-5 pb-1'>Are you a Registered user?<span className='text-blue-500 ml-1'>
                <Link href={generateDynamicPath()}>
                    Login</Link>
                    </span> </p>
                <Link href={generateDynamicPath()}>
                    <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white md:mb-6 mb-4 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600'>Start Now</button>
                </Link>
                </div>
            </div>
            <div className='h-full w-full md:w-[400px] rounded-xl bg-[#D3E3F9] md:bg-[#e9f6fe] md:p-4 flex flex-col items-center -order-1 md:order-1  max-md:gap-4 max-md:py-4 max-md:rounded-b-[2rem]'>
                <div className='flex flex-row gap-2 mt-10 mb-5'>
                    <h1 className="text-base xs:text-lg md:mt-2 font-semibold md:mb-6 max-sm:text-center">
                        Post property Ad to <br />
                        sell or rent online for</h1>
                    <h1 className='hidden md:block text-6xl font-bold italic uppercase '>Free</h1>
                </div>

                <ul className="list-disc pl-5 text-sm  md:text-[1.1rem]">
                    <li className="hidden md:block md:mb-2">Advertise For FREE</li>
                    <li className="hidden md:block md:mb-2">Sell 10 X faster</li>
                    <li className="hidden md:block md:mb-2">Connect with genuine buyers</li>
                    <li className="hidden md:block md:mb-2">Get unlimited enquiries</li> 

                    <li className="mb-2 md:hidden">{tag.split('').slice(0, index + 1)}</li>
                </ul>
                <Image src={FREE} alt='free' height={200} width={200} className='md:mt-10 md:mb-5 -order-1 md:order-2 max-md:max-w-[150px] max-md:max-h-[150px]' />
            </div>

        </section>
    )
}

export default Hero
