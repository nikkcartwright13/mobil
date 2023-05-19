import React from 'react'
import Chartone from './Chartone'
import { Card } from '@mui/material'
import CardsThreetst from '../../CardTst/CardTwo/Cards/CardsThreetst'
const Pagefive = () => {
  return (
    <div className='Main'>
      <h3>რედაქტირების მოთხოვნები</h3>
      <div className='SectionTwo'>
        <CardsThreetst/>
       <Card style={{marginTop:"15px"}}>
        <Chartone/>
       </Card>
      </div>
    </div>
  )
}

export default Pagefive