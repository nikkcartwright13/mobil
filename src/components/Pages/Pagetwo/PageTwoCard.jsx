import React from 'react'
import './Pagetwo.css'
import { PageCard } from './DataTwo'
import Card from '../../../components/Card/card'

const PageTwoCard = () => {
    return (
        <div className="Cards">
            {PageCard.map((card) => {
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

export default PageTwoCard