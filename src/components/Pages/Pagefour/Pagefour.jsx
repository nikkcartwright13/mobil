import React from 'react'
import ChartOne from './Chartone'
import Charttwo from './Charttwo'
import { Card } from '@mui/material'

const Pagefour = () => {
  return (
    <div className='Main'>
       <h3>SAIDI / SAIFI</h3>
       <div className='SectionTwo'>
       <Card style={{ paddingTop:"12px" }} >
       <ChartOne/>
       </Card>
       <Card style={{ paddingTop:"12px" , marginTop:"20px" }} >
       <Charttwo/>
       </Card>
       </div>
       
     
    </div>
  )
}

export default Pagefour