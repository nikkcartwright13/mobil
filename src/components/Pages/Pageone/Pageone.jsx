import React from 'react'
import ChartOne from '../../Charts/Chartone'
import BigCard from '../../CardsFolder/StaticCards/BigCards/Cards/BigCard'
const Pageone = () => {
  return (
    <div className='Main'>
      <h3>გარანტირებული სტანდარტები</h3>
      <BigCard/>
      <div className='SectionTwo'>
         <ChartOne />
      </div>
    </div>
  )
}

export default Pageone