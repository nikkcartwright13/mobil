import React from 'react'
import '../SmallCards.css'

const SmallCard = (param) => {
    return (
        <div className="InfoCardTwo" style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
            border: param.color.border
        }}>
            <div className="CardTitleTwo">
                <span>{param.title}</span>
                
            </div>
            <div className="CardValueTwo">
                <span>{param.value}</span>
            </div>
        </div>
    )
}

export default SmallCard