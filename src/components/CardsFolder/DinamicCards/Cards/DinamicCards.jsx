import React from 'react'
import '../DinamicCard.css'
import { MaincardsData } from '../../../../Data/CardData/DinamicCard/CardData'
import Card from '../Card/card'
const DinamicCards = () => {
    return (
        <div className="DinamicCards">
            {MaincardsData.map((card) => {
                return (
                    <div className='DinamicparentContainer'>
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

export default DinamicCards