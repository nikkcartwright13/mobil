import React from 'react'
import ChartFive from '../../Charts/ChartFive'
import Pagethreecard from '../../CardsFolder/StaticCards/SmallCards/Cards/Pagethreecard'
const Pagefive = () => {
  return (
    <div className='Main'>
      <h3>რედაქტირების მოთხოვნები</h3>
      <Pagethreecard/>
      <div className='SectionTwo'>
        <ChartFive/>
      </div>
    </div>
  )
}

export default Pagefive