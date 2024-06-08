'use client'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Button, Checkbox, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function InstantLoanForm({ onNext }) {
  const params = useSearchParams();
  const [tcChecked, setTcChecked] = useState(false);
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      tenure: '1',
      age: '1'
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    onNext('detailsModal', data);
  }

  useLayoutEffect(() => {
    if (params.get('amount')) {
      setValue('amount', params.get('amount'));
    }
    if (params.get('tenure')) {
      console.log(params.get('tenure'));
      setValue('tenure', params.get('tenure'));
    }
  }, [params, setValue]);

  return (
    <div>
      <h1 className='text-justify md:text-center text-2xl md:text-4xl text-blue-600 font-bold'>
        Get Instant Loan
      </h1>
      <form className='py-2 md:py-4' onSubmit={handleSubmit(onSubmit)}>
        <p className='py-2 max-sm:pt-0'>
          We just need a few details to match you with the right home loan product.
        </p>
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
          <Grid container spacing={0} sx={{ padding: 0, margin: 0 }}>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
                <OutlinedInput
                  {...register('amount', { required: "Please fill this field." })}
                  id="outlined-adornment-amount"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg"> ₹ </span></InputAdornment>}
                  label="Loan Amount"
                  error={!!errors.amount}
                  helperText={errors.amount && errors.amount.message}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <TextField
                  select
                  {...register('tenure', { required: "Please fill this field." })}
                  label="Tenure"
                  error={!!errors.tenure}
                  helperText={errors.tenure && errors.tenure.message}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">Years&nbsp;&nbsp;</InputAdornment>,
                  }}
                >
                  {[...Array(100)].map((_, index) => <MenuItem value={index + 1} key={index}>{index + 1}</MenuItem>)}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <TextField
                  select
                  {...register('age', { required: "Please fill this field." })}
                  label="Age"
                  error={!!errors.age}
                  helperText={errors.age && errors.age.message}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">Years&nbsp;&nbsp;</InputAdornment>,
                  }}
                >
                  {[...Array(100)].map((_, index) => <MenuItem value={index + 1} key={index}>{index + 1}</MenuItem>)}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="pIdentified-label">Is Your Property Identified</InputLabel>
                <Select
                  {...register('pIdentified', { required: "Please fill this field." })}
                  labelId="pIdentified-label"
                  label="pIdentified"
                  error={!!errors.pIdentified}
                  helperText={errors.pIdentified && errors.pIdentified.message}
                >
                  <MenuItem value={"true"}>Yes</MenuItem>
                  <MenuItem value={"false"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="pCity-label">Property City</InputLabel>
                <Select
                  {...register('pCity', { required: "Please fill this field." })}
                  labelId="pCity-label"
                  label="pCity"
                  error={!!errors.pCity}
                  helperText={errors.pCity && errors.pCity.message}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} sx={{ padding: 1, margin: 0 }} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-pCost">Property Cost</InputLabel>
                <OutlinedInput
                  {...register('pCost', { required: "Please fill this field." })}
                  id="outlined-adornment-pCost"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg"> ₹ </span></InputAdornment>}
                  label="Property Cost"
                  error={!!errors.pCost}
                  helperText={errors.pCost && errors.pCost.message}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="eType-label">Employment Type</InputLabel>
                <Select
                  {...register('eType', { required: "Please fill this field." })}
                  labelId="eType-label"
                  label="eType"
                  error={!!errors.eType}
                  helperText={errors.eType && errors.eType.message}
                >
                  <MenuItem value={"salaried"}>Salaried</MenuItem>
                  <MenuItem value={"self-emp"}>Self - Employed</MenuItem>
                  <MenuItem value={'NA'}>Not Applicable</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-income">Your Income</InputLabel>
                <OutlinedInput
                  {...register('income', { required: "Please fill this field." })}
                  id="outlined-adornment-income"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg"> ₹ </span></InputAdornment>}
                  label="Your Income"
                  error={!!errors.income}
                  helperText={errors.income && errors.income.message}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-curEmi">Current EMI</InputLabel>
                <OutlinedInput
                  {...register('curEmi', { required: "Please fill this field." })}
                  id="outlined-adornment-curEmi"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg"> ₹ </span></InputAdornment>}
                  label="Current EMI"
                  error={!!errors.curEmi}
                  helperText={errors.curEmi && errors.curEmi.message}
                  endAdornment={<InputAdornment position="end">Monthly</InputAdornment>}
                  inputProps={{
                    'aria-label': 'curEmi',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <TextField
                  {...register('fullName', { required: "Please fill this field." })}
                  label="Full Name (As per PAN)"
                  error={!!errors.fullName}
                  helperText={errors.fullName && errors.fullName.message}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <TextField
                  {...register('email', {
                    required: 'Please enter a valid email address',
                    pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Enter a valid email' }
                  })}
                  label="Your Email ID"
                  error={!!errors.email}
                  helperText={errors.email && errors.email.message}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ padding: 1, margin: 0 }} md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <TextField
                  {...register('mobile', {
                    required: "Please fill this field.",
                    pattern: {
                      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                      message: "Please enter a valid phone number."
                    }
                  })}
                  label="Mobile Number (OTP Verification required)"
                  error={!!errors.mobile}
                  helperText={errors.mobile && errors.mobile.message}
                />
              </FormControl>
            </Grid>
          </Grid>
          <div className='flex w-full items-start md:items-center md:w-[80%] mx-auto'>
            <Checkbox {...label}
              checked={tcChecked}
              onChange={() => setTcChecked(prev => !prev)}
            />
            <h1 className="text-gray-400 text-[12px] md:text-base text-justify">
              I authorize dealacres.com relevant loan providers and their representatives to call, SMS, or email me with reference to the application ** accept dealacres.com "Terms & Conditions". This consent shall override any DNC/NDNC registration.
            </h1>
          </div>
          <button className="bg-blue-500 text-white text-base sm:text-lg py-2 px-8 flex items-center justify-center rounded shadow w-[80%] mx-auto disabled:bg-blue-300"
            type="submit" disabled={!tcChecked}>
            Submit Details
          </button>
        </Stack>
      </form>
      <p className="text-xs font-thin text-center text-gray-400 md:hidden">
        *Please note that our privacy policy does not govern the use of your data by financial institutions once it is shared. For more information, please refer to the privacy policy of the related concerned bank.
      </p>
    </div>
  );
}
