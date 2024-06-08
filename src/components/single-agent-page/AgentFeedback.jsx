'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const AgentFeedback = () => {
    const [rating, setRating] = useState(0)

    
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data) => {

        setIsLoading(true) 
        setTimeout(() => {
            console.log(data);
            
          
            alert("You message has been successfully sent to the agent!")
            setIsLoading(false)

        }, 3000)

       

      

    }
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    return (
        <div className='w-full md:p-4' >
            <h2 className='font-bold text-lg py-2 hidden md:block'>
                Leave a Feedback - As your words matter to us
            </h2>

            <div className='flex flex-col w-full pb-1 xs:pb-2 md:py-1'>
                <label className='font-bold text-xs xs:text-sm sm:text-base' htmlFor="email">
                    Email
                </label>
                <input id='email' {...register('email', {required: "Email is required."})} className='border border-black outline-none py-1 px-4 rounded shadow' type="text" />
            </div>
            <div className='flex flex-row  w-full py-0.5 xs:py-2 gap-2 md:gap-4'>
                <div className='w-1/2 flex flex-col'>
                <label className='font-bold text-xs xs:text-sm sm:text-base' htmlFor="title">
                    Title
                </label>
                    <input type="text" 
                    id='title'
                    className='border border-black outline-none py-1 md:py-0.5 px-2 md:px-4 text-xs xs:text-sm sm:text-base rounded shadow' />
                </div>
                <div className='w-1/2 flex flex-col '>
                <label className='font-bold text-xs xs:text-sm sm:text-base' htmlFor="title">
                    Rating
                </label>
                <div className="flex gap-1 md:gap-2  ">
                {
                    [1,2,3,4,5].map((value) => {
                        return rating >= value ? (<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-yellow-500"
                            onClick={() => setRating((prev) => {
                                return value === prev ? value - 1 : value 
                            })}
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke='black'
                            fill="currentColor"
                            className="w-8 h-8 text-white "
                            onClick={() => setRating((prev) => {
                                return value === prev ? value - 1 : value 
                            })}
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          )
                    })
                }
                </div>
                </div>
            </div>
            <div className='flex flex-col w-full pb-1 xs:pb-2 md:py-2'>
                <label className='font-bold text-xs xs:text-sm sm:text-base' htmlFor="email">
                    Review
                </label>
                <textarea rows={1} className='border border-black outline-none py-1 md:py-2  px-2 md:px-4 text-xs xs:text-sm sm:text-base rounded shadow'  />
            </div>

            <button className='w-full py-1 sm:py-2 md:py-1 text-white bg-blue-600 rounded shadow text-xs xs:text-sm sm:text-base md:text-xl  font-bold'>
                Submit
            </button>

        </div>
    )
}

export default AgentFeedback
