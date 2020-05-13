import React from 'react'
import './index.scss'

function Info({en, ch, content}) {
    return (
        <div className='info'>
            <div className="title">
                <div className="en">
                    <h4>
                        {en}
                    </h4>
                </div>
                <div className="ch">
                    <h3>
                        {ch}
                    </h3>
                </div>
            </div>
            <div className="content">
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Info
