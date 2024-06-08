'use client'
import { Stack, TextField, TextareaAutosize } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners';

const MeetAttendeForm = ({
    goBack
}) => {


    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        name: "",
        email: "",
        phone: ""
    });

    const onSubmit = (data) => {
        setIsLoading(true);

        setTimeout(() => {
            
            setIsLoading(false);
        }, 2000)
    }

    return (
        <div className='flex flex-col gap-4 px-4'>
            <TextField
            {...register('name', {required: "Please Enter Your Name"})}
            error={errors.name && !!errors.name}
            helperText={errors.name && errors.name.message}
   
            id="name" label="Your Name" variant="outlined" />
            

          
            <TextField
            {...register('email', {
                required: 'Please enter a valid email address',
                pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Enter a valid email' }
              })}
            id="email" label="Email Address" variant="outlined"
            error={errors.email && !!errors.email}
            helperText={errors.email && errors.email.message}
    />

            <TextField
             {...register('phone', {
                required: "Please fill this field.",
                pattern: {
                  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  message: "Please enter valid phone number."
                }
              })}
            id="phone" label="Phone Number" variant="outlined"
            error={errors.phone && !!errors.phone}
            helperText={errors.phone && errors.phone.message}
             />

            <div className='w-full my-2 py-2 border-t border-gray-400'>

            <label htmlFor="notes">
                Additional Notes
            </label>
            <textarea
            {...register('notes')}
            id='notes'
            placeholder='Please share anything that will help prepare for our meeting.'
            className='border border-gray-400 p-4 w-full rounded-lg'
           
            />
            
            </div>
            
            <div className='flex justify-end gap-4 text-lg font-semibold'>
                <button className='border border-black rounded-xl px-4 py-2 shadow hover:bg-black/20 transition-all'
                onClick={() => goBack()}
                >
                    Previous
                </button>

                <button className='text-white bg-black rounded-xl py-2 px-4 shadow hover:bg-black/70 transition-all flex items-center
                disabled:bg-black/40
                '
                onClick={handleSubmit(onSubmit)}
               disabled={isLoading} 
                >
                    Submit{ isLoading && <span className='w-full text-white flex items-center justify-center '><ClipLoader color='white' size={20}/></span>}
                </button>
            </div>
        </div>
    )
}

export default MeetAttendeForm
