import React from 'react'
import PageOneCard from './PageOneCard'
import ChartOne from './Chartone'
import { Card } from '@mui/material'
const Pageone = () => {
  return (
    <div className='Main'>
      <h3>გარანტირებული სტანდარტები</h3>
      <PageOneCard />
      <div className='SectionTwo'>
        <h3>შესრულების მაჩვენებელი %</h3>
      <Card  style={{ paddingTop:"12px" }}>
         <ChartOne />
       </Card>
      </div>
      
    

    </div>
  )
}

export default Pageone