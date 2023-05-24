import React from 'react'
import '../SmallCards.css'
import { PageTwoCardTwo } from '../../../../../Data/CardData/StaticCard/StaticCardData'
import SmallCard from '../Card/SmallCard'
const Pagewtwocardvtwo = () => {
    return (
        <div className="SmallCards">
            {PageTwoCardTwo.map((card) => {
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

export default Pagewtwocardvtwo