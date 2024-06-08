import React from 'react'
import ReviewsLayout from './ReviewsLayout';
import style from "./reviews.module.css"

const Reviews = () => {
  
  return (
    <div className={style.ReviewMargin}>
      <p className='text-justify text-sm sm:text-base px-4'>Welcome to our Testimonial Page, where our valued customers share their experiences and thoughts about our products and services. We take pride in providing top-notch solutions that make a positive impact on the lives of our clients. Don't just take our word for it – read what our customers have to say:</p>
      
      <div className={style.ReviewLayout}>
      <ReviewsLayout />
      </div>
      
    </div>
  )
}

export default Reviews;
