import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughNut = ({ dProps, mortgage, setIsLoading }) => {
    const { amount, downpayment, roi, pTax, insurance, pmi } = dProps;

    
    const principalInterest = ((amount - downpayment) * (roi / 100)).toFixed(2);

    const data = {
        labels: ['Principal Interest', 'Property Tax', 'Home Insurance', 'PMI'],
        datasets: [
            {
                label: '',
                data: [principalInterest, pTax, insurance, pmi],
                backgroundColor: ['#ffcdd2', '#81d4fa', '#dce775', '#ff8a65'],
                borderColor: ['#ffcdd2', '#81d4fa', '#dce775', '#ff8a65'],
                borderWidth: 1
            }
        ]
    };

    const options = {
        cutout: '75%',
        radius: '100%',
        plugins: {
            legend: {
                display: false
            },
            title: {
                text: 'Title Value',
                align: 'center',
                position: 'inside',
                display: true
            }
        }
    };

    const [isChartRendered, setIsChartRendered] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            setIsChartRendered(true);
        }
    }, []);

    useEffect(() => {
        setIsLoading(!isChartRendered || !amount || !insurance || !roi || !pmi);
    }, [isChartRendered, amount, insurance, roi, pmi]);

    return (
        <div className="relative flex justify-between gap-4 flex-row items-center md:items-start">
            {(!isChartRendered || (!amount && !insurance && !roi && !pmi)) && (
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-2xl">
                    Please Enter Your Data
                </div>
            )}

            <div className="max-h-[150px] md:max-h-[250px] max-w-[200px] md:max-w-[250px] relative">
                <Doughnut ref={chartRef} data={data} options={options} />

                <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 sm:text-xl font-bold text-center">
                    {!isNaN(Number(mortgage)) && `₹${Math.ceil(mortgage).toLocaleString('en-IN')} Per Month`}
                </div>
            </div>

            {isChartRendered && amount && insurance && roi && pmi && (
                <div className="self-center right-4 top-[50%] md:flex md:flex-col gap-2 px-2 md:px-4 w-full hidden ">
                    {data.labels.map((label, i) => (
                        <p className="flex flex-row gap-2 md:gap-8 border-b border-b-gray-400 py-2 text-sm justify-between items-center" key={i}>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <div className="min-h-[20px] min-w-[20px]" style={{ backgroundColor: data.datasets[0].backgroundColor[i], borderRadius: '50%', marginRight: '8px' }}></div>
                                {label}
                            </div>
                            <span>₹ {data.datasets[0].data[i]}</span>
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DoughNut;
