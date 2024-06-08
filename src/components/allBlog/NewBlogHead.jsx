import Image from 'next/image';
import React from 'react';
import img from '../../../public/Bloghead.jpg';
import BlogHeadCard from './BlogHeadCard';
import { FaArrowCircleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const NewBlogHead = () => {
  const colors = [
    'text-[#2CD3E1]',
    'text-[#D0F5BE]',
    'text-[#FEFF86]',
    'text-[#FFF2F2]',
  ];

  return (
<<<<<<< HEAD
    <div className='h-[750px] overflow-hidden md:h-[675px] lg:max-h-[88vh] w-screen max-w-full relative after:absolute after:bg-black/50 after:w-full after:h-full after:left-0 text-white after:z-[7]'>
      <div className='absolute w-full h-full z-[5] '>
        <Image src={img} alt={'Luxurious House'} className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
=======
    <div className='min-h-[710px] md:min-h-[550px]  overflow-hidden   w-screen max-w-full relative text-white '>

      {/* background image */}
      <div className='absolute w-full h-full z-[5] '>
        <Image src={img} alt={'Luxurious House'} className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/50'></div>
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d
      </div>

<<<<<<< HEAD
      <div className=' absolute top-[20px] z-[8] w-full h-full px-4 py-8 flex flex-col gap-4  items-center'>
        <div className='text-3xl py-4 inline font-bold self-start ml-20'>
          Information {' '} <span className='bg-white p-2 text-black text-3xl'> HUB</span>
        </div>

        {/* <div className='flex justify-center self-stretch w-full'>
          <input type="text" placeholder='Search...' className='border border-white bg-transparent text-xl p-2 md:w-2/4 placeholder:text-white placeholder:font-bold ' />

        </div> */}

        {/* <div className='text-xl  md:text-3xl font-medium py-4 text-center md:w-2/3 mx-auto'>
          Deal Acres is your ultimate destination for valuable insights and knowledge in the ever-evolving world of real estate.
=======

      <div className=' absolute top-[80px] z-[8] w-full h-full px-4 py-4 sm:py-8 flex flex-col gap-4  items-center'>
        <div className='text-xl py-2 max-sm:pt-4 sm:py-4 inline font-bold self-start'>
          Information {' '} <span className='bg-white p-1 sm:p-2 text-black text-2xl'> HUB</span>
        </div>

        <div className='flex justify-center self-stretch w-full md:w-2/3 relative mx-auto'>
          <input type="text" placeholder='Search...' className='border border-white bg-transparent text-lg sm:text-xl p-1 sm:p-2  placeholder:text-white max-sm:placeholder:font-semibold placeholder:font-bold  w-full ' />
          <span className='absolute right-4 top-1/2 -translate-y-1/2'><CiSearch size={20} /></span>
        </div>

        <div className='text-lg xs:text-xl md:text-2xl font-bold  py-4 text-justify xs:text-center lg:w-2/3 mx-auto  lg:max-w-screen-lg lg:mx-auto'>
          Deal Acres is your ultimate destination for valuable insights and knowledge in the ever-evolving world of real estate. <FaArrowCircleRight size={20} color='white' style={{display: 'inline'}} />
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d
        </div>

        <div className=' md:text-4xl flex xs:grid grid-cols-2 sm:grid-cols-4 xs:justify-center flex-wrap lg:flex-nowrap  gap-4 md:gap-x-8 py-4  lg:max-w-screen-lg lg:mx-auto overflow-scroll sm:overflow-hidden'>
          {
<<<<<<< HEAD
            [...Array(4)].map((_, index) => (<div className='w-[150px] md:w-[200px] mt-4' key={index}>
=======
            [...Array(4)].map((_, index) => (<div className='w-[45%] xs:w-[150px] md:w-[200px]' key={index}>
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d
              <BlogHeadCard title='Infocus Rera'
                description="Decoding the Real Estate (Regulation and Development) Act, 2016/"
                color={colors[index]}
              />
            </div>)
            )
          }
        </div>
      </div> */}

          {/* search bar */}
      <div className='flex justify-center self-stretch w-full'>
        <input type="text" placeholder='Search...' className='border border-white bg-transparent text-xl p-2 md:w-2/4 placeholder:text-white placeholder:font-bold ' />
      </div>

<<<<<<< HEAD
      <div className='text-2xl md:text-3xl font-medium py-4 text-center md:w-2/3 mx-auto'>
=======

          {/* content */}
      <div className='text-2xl md:text-4xl font-medium py-4 text-center md:w-2/3 mx-auto'>
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d
        Deal Acres is your ultimate destination for valuable insights and knowledge in the ever-evolving world of real estate.
      </div>

          {/* Information Cards */}
      <div className='md:text-4xl flex justify-center flex-wrap lg:flex-nowrap gap-4 py-4 md:w-2/3 md:mx-auto overflow-scroll sm:overflow-hidden'>
        {[...Array(4)].map((_, index) => (
          <div className='w-[150px] md:w-[200px]' key={index}>
            <BlogHeadCard title='Infocus Rera' description="Decoding the Real Estate (Regulation and Development) Act, 2016/" color={colors[index]} />
          </div>
        ))}
      </div>

    </div>
    </div>

  );
};

export default NewBlogHead;
