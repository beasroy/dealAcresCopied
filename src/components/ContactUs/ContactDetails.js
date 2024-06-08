import React from 'react';

const ContactDetails = () => {
  return (
    <div className="mx-auto gap-4 mt-10 md:mt-24 w-[98%] md:w-[70%] grid grid-cols-2 lg:grid-cols-3 mb-10">
      <div className='p-2 bg-white h-52 '>
      <div className="h-[12rem] border-2   text-center border-black ">
        <svg className="w-full h-5 md:h-7 my-3 md:my-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <h1 className=" mt-2 mb-1 text-base">+917015963201</h1>
        <p className='py-2 px-3 text-[0.7rem] lg:text-base'>Talk to a Customer Service Representative for help with our site, app, or finding a Deal Acres Agent.</p>
      </div>
      </div>
<div className=' p-2 bg-white h-52 '>
      <div className="h-[12rem] text-center border-2 border-black ">
        <svg className="w-full h-5  md:h-7 my-3 md:my-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
        <h1 className="my-2">Message Us</h1>
        <p className='py-2 px-3 text-[0.7rem] lg:text-base'>Send our Customer Service Team questions about our site, app, or finding a Deal Acres Agent.</p>
      </div>
      </div>
<div className='md:col-span-1 col-span-2 mx-[25%] md:mx-0 p-2 bg-white h-52 '>
      <div className=" h-[12rem] text-center  border-2 border-black ">
        <svg className="w-full h-5 md:h-7 my-3 md:my-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
        <h1 className="mb-2">Connect with us</h1>
        <p className='p-2 text-[0.7rem] lg:text-base'>Talk to a Customer Service Representative for help with our site, app, or finding a Deal Acres Agent.</p>
      </div>
      </div>
    </div>
  );
};

export default ContactDetails;
