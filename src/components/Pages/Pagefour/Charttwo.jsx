//import Chart from 'react-apexcharts'
import React from 'react';

import Chart from 'react-apexcharts';



const Charttwo = () => {

    const series = [{
        name: 'მიერთებების რაოდენობები',
        type: 'column',
        data: [2126, 2923, 2848, 263,]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [5, 10, 12, 13,]
    }]

    const options = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
              }
          
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'შესრულების მაჩვენებელი წლების მიხედვით',  
        },
        
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['2020', '2021', '2022', '2023',],

        yaxis: [{
            title: {
                text: 'მიერთებების რაოდენობები',
            },
           

        }, {
            opposite: true,
            title: {
                text: 'პროცენტული მაჩვენებელი',
            }
           
        }],
        legend: {
            show: false
        }

    }
    







    return (
        <Chart options={options} series={series} type='line' height={200} />
    )

}


export default Charttwo