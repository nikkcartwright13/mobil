import React from 'react'
import './cardstwotst.css'
import { TestTwoCrdTwo } from '../../../../Data/TestData/TestData'
import Cardtwotst from '../Card/cardtwotst'
const CardsThreetst = () => {
    return (
        <div className="Cards">
            {TestTwoCrdTwo.map((card) => {
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

export default CardsThreetst