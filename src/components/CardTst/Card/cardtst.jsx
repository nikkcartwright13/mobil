import React from 'react'
import './card.css'

const Cardtst = (param) => {
    return (
        <div className="InfoCard" style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
            border: param.color.border
        }}>
            <div className="CardTitle">
                <span>{param.title}</span>
                
            </div>
            <div className="CardValue">
                <span>{param.value}</span>
            </div>
        </div>
    )
}




export default Cardtst