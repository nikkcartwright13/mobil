//import Chart from 'react-apexcharts'
import React from 'react';

import Chart from 'react-apexcharts';



const Charttwo = () => {

    const series = [{
        name: 'დროულად დასრულებული',
        data: [44, 55, 41, 37, 22, 43, 21, 18, 0.5]
    }, {
        name: 'ვადაგადაცილებით დასრულებული',
        data: [53, 32, 33, 52, 13, 43, 32, 18, 1]
    }, {
        name: 'მიმდინარე',
        data: [12, 17, 11, 9, 15, 11, 20, 18, 2]
    },
    {
        name: 'რეაგირების გარეშე',
        data: [12, 17, 11, 9, 15, 11, 20, 18, 50]
    },
    {
        name: 'დახარვეზებული',
        data: [12, 17, 11, 9, 15, 11, 20, 18, 50]
    },
    {
        name: 'მომხმარებელის უარი',
        data: [12, 17, 11, 9, 15, 11, 20, 18, 15]
    },
    ]


    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            },
           
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },

        yaxis: {
            title: {
                text: undefined
            },
        },

        fill: {
            opacity: 1
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            show: false

        },

        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ["ახალი მიერთება", "სიმძლავრის გაზრდა", "ტექნიკური პირობის გაცემა", "ქსელზე შეჭრა", "მომარაგების აღდგენა", "მიმართვაზე რეაგირება", "აღრიცხვის ხელსაწყოს შემოწმება", "ტექნიკური ხარისხის შემოწმება", "მიკროს მიერთება"],
            labels: {
                show: false
            }
        },
        grid: {
            padding: {
                bottom: -15,
                top: -5
            }
        },


    }


    return (
        <Chart options={options} series={series} type='bar' height={300} />
    )

}


export default Charttwo