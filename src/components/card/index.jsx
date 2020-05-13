import React from 'react'
import './index.scss'

function Card({svg, name}) {
    return (
        <div className='card'>
            <div className="svg">
                {svg}
            </div>
            <div className='name'>
                {name}
            </div>
        </div>
    )
}

export default Card
