import React from 'react'
import '../SmallCards.css'
import { PageThreeCardOne } from '../../../../../Data/CardData/StaticCard/StaticCardData'
import SmallCard from '../Card/SmallCard'
const Pagethreecard = () => {
    return (
        <div className="SmallCards">
            {PageThreeCardOne.map((card) => {
                return (
                    <div className='SmallParentContainer'>
                        <SmallCard
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

export default Pagethreecard