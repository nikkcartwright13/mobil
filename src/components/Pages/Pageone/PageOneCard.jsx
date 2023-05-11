import React from 'react'
import './Pageone.css'
import { PgOneCard } from './DataOne'
import Card from '../../../components/Card/card'

const PageOneCard = () => {
    return (
        <div className="Cards">
            {PgOneCard.map((card) => {
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

export default PageOneCard