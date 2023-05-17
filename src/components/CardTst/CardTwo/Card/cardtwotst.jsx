import React from 'react'
import './cardtwo.css'

const Cardtwotst = (param) => {
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




export default Cardtwotst