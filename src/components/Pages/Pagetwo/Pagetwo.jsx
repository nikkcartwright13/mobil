import React from 'react'
import PageTwoCard from './PageTwoCard'
import { Card } from '@mui/material'
import Charttwo from './Chart'

const Pagetwo = () => {
  return (
    <div className='Main'>
      <h3>განაცხადები სტატუსების მიხედვით</h3>
      <PageTwoCard />
      <div className='SectionTwo'>
        <h3>Title of chart</h3>
        <Card >
           <Charttwo  />
        </Card>
      </div>
    </div>
  )
}

export default Pagetwo