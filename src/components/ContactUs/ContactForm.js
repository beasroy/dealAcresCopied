"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./details.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.ContactForm}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h2 className={styles.contactHead}>Contact Us</h2>
        <input
          type="text"
          name="name"
          {...register("name", { required: "Your Name is required" })}
          placeholder="Please Enter Your Name"
        />
        <p>{errors.name?.message}</p>

        <input
          type="email"
          name="email"
          {...register("email", { required: "Enter Your Email Id" , pattern: {value: /^\S+@\S+$/i, message: "Please Enter a Valid Email Address"}})}
          placeholder="Enter Your Mail Id"
        />
        <p>{errors.email?.message}</p>
        
        <input
          type="tel"
          name="tel"
          {...register(
            "phone",
            { required: "Enter Your Contact No" },
            { pattern: {value: /[0-9]{3}-[0-9]{2}-[0-9]{3}/i , message: "Please Enter a Valid Contact Number"} },
            {minLength: {value: 10, message: "Please Enter a Valid Contact Number"}, }
          )}
          placeholder="Enter Your Phone No."
        />
        <p>{errors.phone?.message}</p>


        <select
          name="iam"
          {...register("iam", { required: "Please select an option" })}
          className={styles.iamInput}
        >
          <option value="" disabled selected>
            I am
          </option>
          <option value="An Existing Client of Square Yards or Square Capital">
            An Existing Client of Square Yards or Square Capital
          </option>
          <option value="Looking to buy/invest in property">
            Looking to buy/invest in property
          </option>
          <option value="Looking for a Loan">Looking for a Loan</option>
          <option value="A Real Estate Agent/Financial Advisor looking for Partnership">
            A Real Estate Agent/Financial Advisor looking for Partnership
          </option>
          <option value="A Developer/Real Estate Builder Looking for Partnership">
            A Developer/Real Estate Builder Looking for Partnership
          </option>
          <option value="Looking for a Job">Looking for a Job</option>
          <option value="Others">Others</option>
        </select>
        <p>{errors.iam?.message}</p>


        <input
          type="text"
          name="msg"
          {...register("Message", { required: "Enter Your Message" })}
          placeholder="Enter Your Mesage"
        />
        <p>{errors.Message?.message}</p>

        <button
          type="submit"
          onClick={() => {
            console.log(errors);
          }}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
