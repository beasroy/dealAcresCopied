"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import styles from "./AskDealAcres.module.css";

const AskDealAcres = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div  className={styles.AskDealAcres}>
      <div  className={styles.ContactForm}>
      <div className={styles.TitleInfo}>
        <h2>
        Ask From Deal Acres 
        </h2>
        <p>We’re here to help seven days a week</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          {...register("name", { required: "Your Name is required" })}
          
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: "Enter Your Email Id" , pattern: {value: /^\S+@\S+$/i, message: "Please Enter a Valid Email Address"}})}
          
        />
        <p>{errors.email?.message}</p>
        
        <label htmlFor="">Phone No.</label>
        <input
          type="tel"
          name="tel"
          {...register(
            "phone",
            { required: "Enter Your Contact No" },
            { pattern: {value: /[0-9]{3}-[0-9]{2}-[0-9]{3}/i , message: "Please Enter a Valid Contact Number"} },
            {minLength: {value: 10, message: "Please Enter a Valid Contact Number"}, }
          )}
          
        />
        <p>{errors.phone?.message}</p>



            <label htmlFor="">What can we help you with?</label>
        <input
          type="text"
          name="msg"
          {...register("Message", { required: "Enter Your Message" })}
        />
        <p>{errors.Message?.message}</p>

        <button
          type="submit"
          onClick={() => {
            console.log(errors);
          }}
        >
          {" "}
          Send
        </button>
      </form>

      </div>
    </div>
  )
}

export default AskDealAcres
