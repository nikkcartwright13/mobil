import React from 'react'
import './cards.css'
import { MaincardsData } from '../../Data/CardData/CardData'
import Card from '../Card/card'
const Cards = () => {
    return (
        <div className="Cards">
            {MaincardsData.map((card) => {
                return (
                    <div className='parentContainer'>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards