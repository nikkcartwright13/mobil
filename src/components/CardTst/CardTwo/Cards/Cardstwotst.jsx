import React from 'react'
import './cardstwotst.css'
import { TestTwoCrdOne } from '../../../../Data/TestData/TestData'
import Cardtwotst from '../Card/cardtwotst'
const Cardstwotst = () => {
    return (
        <div className="Cards">
            {TestTwoCrdOne.map((card) => {
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

export default Cardstwotst