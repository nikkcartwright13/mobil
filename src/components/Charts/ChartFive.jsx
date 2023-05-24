import React from 'react'
import ReactApexChart from 'react-apexcharts';

function ChartFive() {


    const series = [{
        name: 'წყვეტის მიზეზის (შიდა/გარე)',
        data: [44]
    },
    {
        name: 'წყვეტის დაწყება/დასრულების დრო',
        data: [0, 55]
    },
    {
        name: 'დუბლირებული ჩანაწერის წაშლა',
        data: [0, 0, 35]
    },
    {
        name: 'რეაგირების თარიღის ცვლილება',
        data: [0, 0, 0, 43]
    },
    {
        name: 'ატვირთული დოკუმენტის ჩანაცვლება',
        data: [0, 0, 0, 0, 22]
    },
    {
        name: 'დანარჩენი',
        data: [0, 0, 0, 0, 0, 12]
    },


    ]

    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            }

        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        fill: {
            opacity: 1
        },
        colors: ['rgb(0, 143, 251)', 'rgb(0, 227, 150)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#2b908f',
        ],
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "16px",
                fontWeight: "bold"
            }
        },
        legend: {
            position: 'left',
            horizontalAlign: "bottom",
            itemMargin: {
                horizontal: 5,
                vertical: 2,

            },
            fontSize: '15px',
        },

    }



    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" height={200} />
        </div>
    )
}

export default ChartFive