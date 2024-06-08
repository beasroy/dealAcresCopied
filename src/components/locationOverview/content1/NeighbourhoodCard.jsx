import React from 'react'

const NeighbourhoodCard = ({
    title,
    listItems
}) => {
  return (
    <div className="container_box_shadow py-2 px-4">
      <h3>{title}</h3>
      <ul>
        {
            listItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default NeighbourhoodCard
