import React from 'react'
import Charttwo from './Chart'
import Cardstwotst from '../../CardTst/CardTwo/Cards/Cardstwotst'
import Cardstwotsts from '../../CardTst/CardTwo/Cards/Cardstwotsts'

const Pagetwo = () => {
  return (
    <div className='Main'>
      <h3>განაცხადები სტატუსების მიხედვით</h3>
      <Cardstwotst />
      <Cardstwotsts  />
      <div className='SectionTwo'>
          <Charttwo />
      </div>
    </div>
  )
}

export default Pagetwo