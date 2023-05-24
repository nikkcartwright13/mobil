import React from 'react'
import ChartThree from '../../Charts/ChartThree'
import ChartFour from '../../Charts/ChartFour'


const Pagefour = () => {
  return (
    <div className='Main'>
       <h3>SAIDI / SAIFI</h3>
       <div className='SectionTwo'>
       <ChartThree/>
       </div>
       <div className='SectionTwo'>
       <ChartFour/>
       </div>
       
     
    </div>
  )
}

export default Pagefour