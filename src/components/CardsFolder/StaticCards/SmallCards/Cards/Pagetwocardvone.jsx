import React from 'react'
import '../SmallCards.css'
import { PageTwoCardOne } from '../../../../../Data/CardData/StaticCard/StaticCardData'
import SmallCard from '../Card/SmallCard'
const Pagetwocardvone = () => {
    return (
        <div className="SmallCards">
            {PageTwoCardOne.map((card) => {
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
export default Pagetwocardvone