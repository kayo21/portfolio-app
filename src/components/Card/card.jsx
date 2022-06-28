import React from 'react'
import './card.css'

const Card = ({emoji, heading, detail, linkName}) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <a href={linkName} target="_blank"className="c-button">LEARN MORE</a>
        </div>
    )
}

export default Card
