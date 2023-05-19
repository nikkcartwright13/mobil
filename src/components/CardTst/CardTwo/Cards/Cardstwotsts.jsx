import React from 'react'
import './cardstwotst.css'
import { TestThreeCrdTwo } from '../../../../Data/TestData/TestData'
import Cardtwotst from '../Card/cardtwotst'
const Cardstwotsts = () => {
    return (
        <div className="Cards">
            {TestThreeCrdTwo.map((card) => {
                return (
                    <div className='parentContainer'>
                        <Cardtwotst
                            title={card.title}
                            color={card.color}
                            value={card.value}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cardstwotsts