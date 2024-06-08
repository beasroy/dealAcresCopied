import React from 'react'


const PublishedOn = ({
    date,
    align
}) => {
  return (
    <div className={`text-neutral-500 pb-3 text-xs xs:text-sm sm:text-base
    ${align === 'center'? 'text-center': 'text-left'}`}>
        Published On {date}
      </div>
  )
}

export default PublishedOn
