//import Chart from 'react-apexcharts'
import React from 'react';
import Chart from 'react-apexcharts';



const Chartone = () => {

  const series = [{
    name: 'დავალიანების გადაუხდელობისთვის...',
    data: [94]
  },
  {
    name: 'მომხმარებლის წერილობით...',
    data: [0, 97]
  },
  {
    name: 'მომხმარებლის მიმართვის საფუძველზე',
    data: [0, 0, 99]
  },
  {
    name: 'აბონიმენტად დარეგისტრირება..',
    data: [0, 0, 0, 99]
  },
  {
    name: 'ახალი მომხმარებლის მიერთება',
    data: [0, 0, 0, 0, 94]
  },
  {
    name: 'ახალი მომხმარებლის სიმძლავრის გაზრდა...',
    data: [0, 0, 0, 0, 0, 97]
  },
  {
    name: 'მომხმარებლის მიმართვის საფუძველზე...',
    data: [0, 0, 0, 0, 0, 0, 93]
  },
  {
    name: 'ახალი მომხმარებლის მიერთების...',
    data: [0, 0, 0, 0, 0, 0, 0, 93]
  },
  {
    name: 'აღრიცხვის კვანძის მოწყობა...',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 94]
  },
  {
    name: 'მიკროსიმძლავრის ელექტროსადგურის მიერთება',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 92]
  },


  ]


  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar:{
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
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e'
    ],
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["64,000", 124],
      labels: {
        show: false
    }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "15px",
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
    <Chart options={options} series={series} type='bar'  height={300} />
  )

}


export default Chartone