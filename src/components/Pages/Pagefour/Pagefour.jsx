import React from 'react'
import ChartOne from './Chartone'
import Charttwo from './Charttwo'


const Pagefour = () => {
  return (
    <div className='Main'>
       <h3>SAIDI / SAIFI</h3>
       <div className='SectionTwo'>
       <ChartOne/>
       </div>
       <div className='SectionTwo'>
       <Charttwo/>
       </div>
       
     
    </div>
  )
}

export default Pagefour