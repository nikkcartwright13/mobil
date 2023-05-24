import React from 'react'
import Charttwo from '../../Charts/ChartTwo'
import Pagetwocardvone from '../../CardsFolder/StaticCards/SmallCards/Cards/Pagetwocardvone'
import Pagewtwocardvtwo from '../../CardsFolder/StaticCards/SmallCards/Cards/Pagewtwocardvtwo'


const Pagetwo = () => {
  return (
    <div className='Main'>
      <h3>განაცხადები სტატუსების მიხედვით</h3>
     <Pagetwocardvone/>
     <Pagewtwocardvtwo/>
      <div className='SectionTwo'>
        <Charttwo />
      </div>
    </div>
  )
}

export default Pagetwo