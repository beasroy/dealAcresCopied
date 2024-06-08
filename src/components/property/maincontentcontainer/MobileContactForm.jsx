"use client"

import { Lato } from 'next/font/google';
import React from 'react'
import { useForm } from 'react-hook-form';
const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
  });
import { MenuItem, Select, TextField } from "@mui/material";
import Addbox from "../sidecontentcontainer/Addbox";
import styles from '../sidecontentcontainer/sidecontent.module.css'

const MobileContactForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        alert("Details registered, we will get to you soon!!!");
      };
  return (
    <div
      style={lato.style}
      className={`${styles.sideContainer} border-2 rounded-xl border-black p-4 my-4 md:my-0 self-start container_box_shadow !border-none `}
    >
      <form
        className="my-4 sm:my-8 md:my-0 flex flex-col  sm:gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="max-xs:!text-sm py-1 xs:py-2  xs:max-md:!text-lg"> Looking for a Property in {props.title}</h4>
        <div className="w-full flex flex-row gap-2">
        <TextField
          fullWidth
          margin="dense"
          error={errors.Name !== undefined}
          helperText={errors.Name?.message}
          label="Name"
          size="small"
      
          {...register("Name", {
            required: "Name is required",
            maxLength: {
              value: 30,
              message: "Max allowed length of Name is 30",
            },
          })}
          className="!py-0"
        />
        <TextField
          fullWidth
          margin="dense"
          error={errors.Phone !== undefined}
          helperText={errors.Phone?.message}
          label="Phone"
          size="small"
          {...register("Phone", { required: "Phone Number is required" })}
        />
        </div>
        <TextField
          fullWidth
          margin="dense"
          error={errors.Email !== undefined}
          helperText={errors.Email?.message}
          label="Email"
          size="small"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Enter a valid email",
            },
          })}
        />
        <TextField
          multiline
          fullWidth
          margin="dense"
          label="Comments(Optional)"
          rows={4}
          {...register("Comments")}
        />

        <div className={styles.formTermsCond}>
          <input
            type="checkbox"
            {...register("TermsConditions", {
              required:
                "You have to agree to terms and conditions before submitting",
            })}
          ></input>
          <label className="max-sm:!text-sm">
            {" "}
            &nbsp;By submitting this form I agree to{" "}
            <a href="#termsofuse">Terms of use</a>
          </label>
        </div>
        <p style={{ color: "red" }}>
          {errors.TermsConditions && errors.TermsConditions.message}
        </p>
        <button className="max-sm:!text-base ">Send Message</button>
      </form>
      {props.Addbox ? (
        ""
      ) : (
        <div className="hidden">
          <Addbox />
        </div>
      )}
    </div>
  )
}

export default MobileContactForm
