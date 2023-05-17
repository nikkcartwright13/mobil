import React from 'react'
import './cards.css'
import { TestCrd } from '../../../Data/TestData/TestData'
import Card from '../Card/cardtst'
const Cardstst = () => {
    return (
        <div className="Cards">
            {TestCrd.map((card) => {
                return (
                    <div className='parentContainer'>
                        <Card
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

export default Cardstst