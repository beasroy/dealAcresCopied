import React from 'react'
import Select from 'react-select'

const UserSelector = ({
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
        value: "user",
        label: "User"
       },
       {
        value: "owner",
        label: "Owner"
       },
       {
        value: "agent",
        label: "Agent"
       },
       {
        value: "dealer",
        label: "Dealer"
       },
    ]

    const formOptions = (pattern ?  { required: (requireMessage ? requireMessage : ''),
    pattern: (pattern ? {
      value: (pattern),
      message: (requireMessage ? requireMessage : 'Enter valid details.')
    }: {}) } : {required});
    
  return (
    <div>
      <Select
      {...register(id, formOptions)}
      placeholder="User Type"
        options={options}
        isClearable
        value={value}
        onChange = {(value) => onChange(value)}

        classNames={{
          control: () => `${errors[id] ? '!border-rose-500' : '!border-slate-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-slate-600'} border-2 text-sm md:text-lg `,
          input: () => 'placeholder:!text-sm md:placeholder:!text-lg',
          option: () => 'text-xs',

        }}
      />
    </div>
  )
}

export default UserSelector


