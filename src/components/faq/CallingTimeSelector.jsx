import React from 'react'
import Select from 'react-select'

const CallingTimeSelector = ({
    value,
    onChange,
    register,
    required,
    id,
    requireMessage,
    pattern,
    errors
}) => {

    const options = [
       {
        value: "9:00 - 5: 00",
        label: "9:00 - 5: 00",
        
       },
       {
        value: "5:00 - 11:00",
        label: "5:00 - 11:00",
    
       },
       {
        value: "12:00 - 12:00",
        label: "Anytime"
       }
    ]

    const formOptions = (pattern ?  { required: (requireMessage ? requireMessage : ''),
                pattern: (pattern ? {
                  value: (pattern),
                  message: (requireMessage ? requireMessage : 'Enter valid details.')
                }: {}) } : {required});


 
  return (
    <div>
      <Select
      placeholder="Preffered Calling Time"
      {...register(id, formOptions)}
        options={options}
        isClearable
        value={value}
        onChange = {(value) => onChange(value)}
        classNames={{
          control: () => `${errors[id] ? '!border-rose-500' : '!border-slate-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-slate-600'} border-2 text-sm md:text-lg `,
          input: () => 'text-sm md:text-lg',
          option: () => 'text-xs'
        }}
      
      />
    </div>
  )
}

export default CallingTimeSelector


