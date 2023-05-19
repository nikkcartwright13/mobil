import React from 'react'
// import PageTwoCard from './PageTwoCard'

import { Card } from '@mui/material'
import Charttwo from './Chart'
import Cardstwotst from '../../CardTst/CardTwo/Cards/Cardstwotst'
import Cardstwotsts from '../../CardTst/CardTwo/Cards/Cardstwotsts'

const Pagetwo = () => {
  return (
    <div className='Main'>
      <h3>განაცხადები სტატუსების მიხედვით</h3>
      {/* <PageTwoCard /> */}
      <Cardstwotst />
      <div  style={{marginTop: "10px"}}>
      <Cardstwotsts  />
      </div>
      <div className='SectionTwo'>
        <Card style={{ marginTop: '20px' }}>
          <Charttwo />
        </Card>
      </div>
    </div>
  )
}

export default Pagetwo