'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);



export function EmiPie({
  data
}) {

  
    const [pieData, setPieData] = useState({
        labels: ['Interest Amount', 'Principle Amount'],
        
        
        datasets: [
          {
            label: 'Amount: ',
            data,
            backgroundColor: [
              '#31356E',
              '#2D8BBA'
              
            ]
          },
        ],
      }
)

const [labelSize, setLabelsSize] = useState(12);

useEffect(() => {
  if(typeof window !== 'undefined') {
    if(window.innerWidth <= 420) {
      setLabelsSize(10)
    }
  }
}, [])

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      // align: typeof window !== 'undefined' ? (window.innerWidth <= 480 ? 'center' : 'start') : 'center',
      align: 'start',
      labels: {
        font: {
          size: labelSize
        }
      }
    }
  },
};

      useEffect(() => {
        setPieData((prev) => ({
            ...prev,
            datasets: [
                {
                    ...prev.datasets[0],
                    data
                }
            ]
        }))
      }, [data])
 

    console.log(data, pieData.datasets[0].data)


  return <Pie data={pieData} options={options} />;
}
