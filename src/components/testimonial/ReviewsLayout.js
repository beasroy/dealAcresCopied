"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import data from "./data"
import styles from "./reviews.module.css"

const ReviewsLayout = () => {

  let [limit, setLimit] = useState(5)
  const filteredData = data["Review"].slice(0, limit);

  const toggleDisplay = () => {
    if (limit >= data.Review.length) {
      setLimit(-1);
    } else {
      setLimit(limit + 4);
    }
  };

  return (
    <div className="relative overflow-visible after:content-[''] after:absolute after:h-[90%] after:w-[100%]  after:top-[7rem] after:rounded-[1rem] after:bg-[#e4eefe]  after:-z-10 flex flex-col gap-4 px-4 items-center justify-center">
      {filteredData.map((dt, index) => (
        <div key={dt.id} className={styles.reviewBlock}>
          {/* <div> */}
          <div className={styles.User}>
            <div className={styles.UserImg}>
              <Image
                src={dt.src}
                alt='User'
                className='w-full h-full'
              />
            </div>
            <div className={styles.UserInfo}>
              <p>By <strong>{dt.name}</strong></p>
              <p>{dt.position}, {dt.company}</p>
            </div>
          </div>
          <div>
            <p className="leading-[normal]">{dt.description}</p>
          </div>
        </div>
        // </div>
      ))}
      <div className="text-center">
        {limit >= data.Review.length ? '' :
          <button className={styles.MoreReviews} onClick={toggleDisplay}> Load More </button>}
      </div>
    </div>
  )
}

export default ReviewsLayout
