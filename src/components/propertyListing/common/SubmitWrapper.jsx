import React from 'react'

const SubmitWrapper = ({
    children
}) => {
  return (
    <div className="w-[90%] xs:w-[80%]  md:w-full max-md:mx-auto px-5 pb-5 md:px-4 md:container">
      {children}
    </div>
  )
}

export default SubmitWrapper
