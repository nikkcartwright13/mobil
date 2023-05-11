import React from 'react'
import ReactApexChart from 'react-apexcharts';

function Chartone() {

    const series = [
        44, 55, 35, 43, 22, 12
    ]

    const options = {
        chart: {
            width: 450,
            type: 'donut',
            toolbar: {
                show: false
            }
        },

        legend: {
            position: 'right',
            horizontalAlign: "left",
        
            fontSize: "14px"
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10
            }
        },
        grid: {
            padding: {
                bottom: -140,
                top: -0,
                right: 100
            },

        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "12px",
                fontWeight: "regular"
            },
            dropShadow: {
                enabled: false
            }
        },
        labels: ['წყვეტის მიზეზის (შიდა/გარე)', 'წყვეტის დაწყება/დასრულების დრო', 'დუბლირებული ჩანაწერის წაშლა  ', 'რეაგირების თარიღის ცვლილება', 'ატვირთული დოკუმენტის ჩანაცვლება', "დანარჩენი"],

        title: {
            text: 'ტოპ 5 რედაქტირების მოთხოვნა',
            align: 'top',
            floating: true,
        },

    }





    return (
        <div>
            <ReactApexChart options={options} series={series} type="donut"   />
        </div>
    )
}

export default Chartone