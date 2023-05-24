import React from 'react'

import ChartOne from './Chartone'

import Cardstst from '../../CardTst/Cards/Cardstst'
const Pageone = () => {
  return (
    <div className='Main'>
      <h3>გარანტირებული სტანდარტები</h3>
      <Cardstst/>
      <div className='SectionTwo'>
         <ChartOne />
      </div>
    </div>
  )
}

export default Pageone