'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import FormGroup from './FormGroup'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const AgentContactForm = () => {


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
        <div className="relative">
            {
                isLoading && <div className='w-full h-full absolute opacity-50 bg-black flex justify-center items-center'>
                    <ClipLoader color={'#D8E6FE'} size={100} />
                </div>
            }
            <h2 className='font-bold text-xs xs:text-base sm:text-lg md:text-2xl uppercase'>
                Ask sanya a question
            </h2>

            <div className='w-full '>
                <FormGroup
                    labelValue="Name"
                    
                    id="name"
                    register={register}
                    required errors={errors}
                    requiredMessage={"Please Enter Your Name"}
                />
            </div>
            <div className='w-full gap-2 flex flex-row'>
                <div className='w-1/2'>
                    <FormGroup
                        labelValue="Last Name"
                        id="lastName"
                        register={register}
                        required errors={errors}
                        requiredMessage={"Please Enter Your Last Name"}
                    />
                </div>
                <div className='w-1/2'>
                    <FormGroup
                        labelValue="Phone No"
                        id="phoneNo"
                        register={register}
                        required errors={errors}
                        requiredMessage={"Please Enter Your Phone Number"}
                    />
                </div>
            </div>
            <div className='w-full'>
                <label htmlFor='contactMessage' className='text-sm sm:text-base md:text-lg'>
                    What can we do for you?
                </label>
                <textarea rows={1}

                    {...register('contactMessage', { required: "Please Enter your message" })} id="contactMessage" className='py-2 w-full px-4 bg-[#D8E6FE] hover:outline-blue-600' />


                {
                    errors['contactMessage'] && <div className='w-full border border-rose-600 py-2 text-sm text-rose-600  px-4 rounded shadow'>
                        {errors['contactMessage'].message}
                    </div>
                }
            </div>
            <button
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)} className='py-1 xs:py-2 rounded shadow my-2 xs:my-4 flex justify-center items-center bg-blue-600 text-white font-bold text-sm xs:text-base md:text-lg w-full disabled:bg-blue-500 disabled:pointer-events-none' >

                Send Message
            </button>


        </div>
    )
}

export default AgentContactForm
