import React from 'react'
import '../BigCard.css'
import { PageOneCard } from '../../../../../Data/CardData/StaticCard/StaticCardData'
import Card from '../Card/cardtst'
const BigCard = () => {
    return (
        <div className="StaticCards">
            {PageOneCard.map((card) => {
                return (
                    <div className='StaticparentContainer'>
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

export default BigCard