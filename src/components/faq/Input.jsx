

import React from 'react'

const Input = ({
    type = 'text',
    errors,
    required,
    register,
    id,
    disabled,
    label,
    icon: Icon,
    isEmail,
    requireMessage,
    pattern,
    isMobile
}) => {

  
  
  return (
    <div className="w-full relative h-full">
           
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required: (requireMessage ? requireMessage : ''),
                pattern: (pattern ? {
                  value: (pattern),
                  message: (requireMessage ? requireMessage : 'Enter valid details.')
                }: {required}) 
              })}
                placeholder="   "
                type={type}
                className={`
        peer
        w-full
        px-2 md:px-4
        py-1 md:py-2
        placeholder:text-xs md:placeholder:text-sm
        font-light 
        bg-white 
        border
        rounded-md
        ${isMobile ? 'rounded-l-none' : ''}
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        pl-4
        ${errors[id] ? 'border-rose-500' : 'border-slate-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-slate-600'}
      `}
            />
            <label
                className={`
        absolute 
        
        duration-150 
        transform 
        top-1/2
        left-4
        text-xs xs:text-sm md:text-base
        capitalize
        origin-[0] 
        pointer-events-none
        invisible
        peer-placeholder-shown:visible
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:-translate-y-1/2 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        isolate

        `}
            >
                {label}
              
            </label>
            {Icon && <span className='text-neutral-400 absolute right-4 top-[50%] -translate-y-[50%]'>
              {Icon}
            </span>}
        </div>
  )
}

export default Input

