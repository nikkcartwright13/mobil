import React from 'react';
import Chart from 'react-apexcharts';



const ChartOne = () => {

  const series = [{
    name: 'შიდა',
    data: [44, 20]
  }, {
    name: 'გარე',
    data: [53,60]
  }, 
  ]


  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      }
    },
   

    fill: {
      opacity: 1
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      show: true,
      

    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },


    xaxis: {
      categories: ["SAIDI","SAIFI"],
      
    },
    title: {
      text: 'წყვეტის საშუალო ხანგრძლივობა/სიხშირე',
      align: 'left',
      floating: true,


    },



  }


  return (
    <Chart options={options} series={series} type='bar'  height={200} />
  )

}


export default ChartOne