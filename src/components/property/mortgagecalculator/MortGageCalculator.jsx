'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl  from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Checkbox, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import DoughNut from './DoughNut';
import { ClipLoader } from 'react-spinners';
import { useDeviceType } from '@/hooks/useDeviceType';

const MortgageCalculator = () => {
    const defaultValues = {
        amount: 3500000,       
        downpayment: 525000,   
        insurance: 20000,     
        pTax: 12000,          
        roi: 3.5,             
        tenure: 12,           
        pmi: 1000          
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues,
    });

    const [mortgage, setMortgage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [valuesFilled, setValuesFilled] = useState(true);

    const onSubmit = (data) => {
        console.log(data);
    };

    const amount = watch('amount', defaultValues.amount);
    const downpayment = watch('downpayment', defaultValues.downpayment);
    const insurance = watch('insurance', defaultValues.insurance);
    const pTax = watch('pTax', defaultValues.pTax);
    const roi = watch('roi', defaultValues.roi);
    const tenure = watch('tenure', defaultValues.tenure);
    const pmi = watch('pmi', defaultValues.pmi);
    const [isMobile, setIsMobile] = useState(false)

    const {deviceType} = useDeviceType()

    useEffect(() => {
        if(deviceType === 'smallphone' || deviceType === 'phone'){
            setIsMobile(true)
        }
    }, [])

    useEffect(() => {
        if (valuesFilled) {
            let rMonthly = (roi / 100) / 12;
            let nInMonths = tenure * 12;
            const mortgageValue = (amount - downpayment + insurance + pTax + pmi) * ((rMonthly * (1 + rMonthly) ** nInMonths) / ((1 + rMonthly) ** nInMonths - 1));
            
            const roundedMortgageValue = parseFloat(mortgageValue.toFixed(2));
            setMortgage(roundedMortgageValue);
            setIsLoading(false);
        }
    }, [amount, downpayment, insurance, pTax, roi, tenure, pmi]);

    return (
        <div className=' rounded-xl  p-4 relative shadow-lg' style={{ border: "2px solid rgba(0, 0, 10, 0.25)" }}>
            {isLoading && (
                <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
                    <ClipLoader size={100} />
                </div>
            )}

            <div className={`py-4 border-b border-b-gray-400`}>
                <DoughNut mortgage={mortgage} setIsLoading={setIsLoading} dProps={{ amount, downpayment, roi, tenure, pTax, insurance, pmi }} />
            </div>

            <form className='pt-4'>
                <Stack justifyContent={"center"} alignItems={"center"}>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <InputLabel htmlFor="amount">Total Amount</InputLabel>
                                <OutlinedInput
                                    {...register('amount', { required: "Please fill this field." })}
                                    id="amount"
                                    type="number"
                                    startAdornment={<InputAdornment position="start"><span className="font-bold text-lg">₹</span></InputAdornment>}
                                    label="Total Amount"
                                    value={amount}
                                    error={errors.amount && !!errors.amount}
                                    helperText={errors.amount && errors.amount.message}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <InputLabel htmlFor="downpayment">Down Payment</InputLabel>
                                <OutlinedInput
                                    {...register('downpayment', { required: "Please fill this field." })}
                                    id="downpayment"
                                    type="number"
                                    startAdornment={<InputAdornment position="start"><span className="font-bold text-lg">₹</span></InputAdornment>}
                                    label="Down Payment"
                                    value={downpayment}
                                    error={errors.downpayment && !!errors.downpayment}
                                    helperText={errors.downpayment && errors.downpayment.message}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <InputLabel htmlFor="roi">Interest Rate</InputLabel>
                                <OutlinedInput
                                    {...register('roi', { required: "Please fill this field." })}
                                    id="roi"
                                    type="number"
                                    startAdornment={<InputAdornment position="start"><span className="font-bold text-lg">₹</span></InputAdornment>}
                                    label="Loan roi"
                                    value={roi}
                                    error={errors.roi && !!errors.roi}
                                    helperText={errors.roi && errors.roi.message}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <TextField
                                size={isMobile ? 'small' : 'medium'}
                                    {...register('tenure', { required: "Please fill this field." })}
                                    type="number"
                                    label="Loan Terms (Years)"
                                    value={tenure}
                                    error={errors.tenure && !!errors.tenure}
                                    helperText={errors.tenure && errors.tenure.message}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <TextField
                                size={isMobile ? 'small' : 'medium'}
                                    {...register('pTax', { required: "Please fill this field." })}
                                    type="number"
                                    label="Property Tax"
                                    value={pTax}
                                    error={errors.pTax && !!errors.pTax}
                                    helperText={errors.pTax && errors.pTax.message}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <TextField
                                size={isMobile ? 'small' : 'medium'}
                                    {...register('insurance', { required: "Please fill this field." })}
                                    type="number"
                                    label="Insurance"
                                    value={insurance}
                                    error={errors.insurance && !!errors.insurance}
                                    helperText={errors.insurance && errors.insurance.message}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={4} xs={12} sm={6}>
                            <FormControl size={isMobile ? 'small' : 'medium'} fullWidth>
                                <TextField
                                size={isMobile ? 'small' : 'medium'}
                                    {...register('pmi', { required: "Please fill this field." })}
                                    type="number"
                                    label="PMI"
                                    value={pmi}
                                    error={errors.pmi && !!errors.pmi}
                                    helperText={errors.pmi && errors.pmi.message}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Button
                        className="bg-blue-500 text-white text-sm md:text-lg py-2 px-8 inline-flex items-center justify-center rounded shadow disabled:bg-blue-300 self-start mt-4"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit Details
                    </Button>
                </Stack>
            </form>
        </div>
    );
};

export default MortgageCalculator;
