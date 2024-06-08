'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'

const SingleContactForm = () => {


  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      message: ""
    }
  })

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {

    setIsLoading(true)



    setTimeout(() => {
      console.log(data);


      alert("You message has been successfully sent to the agent!")
      setIsLoading(false)

    }, 3000)





  }

  useEffect(() => {
    console.log(getValues('email'), getValues('name'));
    console.log(errors['name'])
  }, [getValues('email'), getValues('name')])
  return (
    <div className='bg-[#1C2956] rounded-[0.5rem] md:rounded-none '>

{
                isLoading && <div className='w-full h-full absolute opacity-50 bg-black flex justify-center items-center'>
                    <ClipLoader color={'#D8E6FE'} size={100}/>
                </div>
            }
      <div className='max-w-screen-lg mx-auto  px-4 flex flex-col items-start gap-4 md:gap-8 py-4 md:py-8'>
            <div className='self-center'>
                <h2 className='text-3xl md:text-5xl font-bold text-white py-3 '>
                    Contact Us
                </h2>
            </div>

        <div className='flex flex-row  justify-between min-w-full gap-2 sm:gap-4 md:gap-8 py-2  sm:py-4 '>
          <div className='w-full flex flex-col'>

            <input  {...register('name', {
              required: "Pleae enter your name"
            })} id='name' className='w-full py-2 px-1 xs:px-2 sm:px-4  ' placeholder='Your Name *' type="text" />
            {errors['name'] && <p className='border  border-rose-500 text-rose-500 p-2 text-lg '>
              {errors['name'].message}
            </p>}
          </div>

          <div className='w-full flex flex-col'>
            <input {...register('contact', {
              required: "Please enter your contact number."
            })} id='contact' className='w-full py-2 px-1 xs:px-2 sm:px-4  ' placeholder='Your Phone Number *' type="text" />
            {errors['contact'] && <p className='border  border-rose-500 text-rose-500 p-2 text-lg '>
              {errors['contact'].message}
            </p>}

          </div>

          <div className='w-full flex flex-col'>
            <input {...register('email', {
              required: 'Please enter a valid email address',
              pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Enter a valid email' }
            })} id='email' className='w-full py-2 px-1 xs:px-2 sm:px-4  ' placeholder='Your Email *' type="text" />
            {errors['email'] && <p className='border  border-rose-500 text-rose-500 p-2 text-lg '>
              {errors['email'].message}
            </p>}
          </div>




        </div>

        <div className='flex h-[100px] sm:h-[200px] w-full '>

          <div className='w-full flex flex-col'>
            <textarea  {...register('message', {
              required: "Please enter your message"
            })} id='message' placeholder="Enter Your Message" className='w-full h-full px-1 xs:px-2 sm:px-4 py-2' />
            {errors['message'] && <p className='border  border-rose-500 text-rose-500 p-2 text-lg '>
              {errors['message'].message}
            </p>}
          </div>

        </div>

        <div className='self-center'>
          <button className='border border-white py-2 px-8 text-white text-xl' onClick={handleSubmit(onSubmit)}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleContactForm
