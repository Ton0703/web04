import React from 'react'
import './index.scss'

function News({title, content}) {
    return (
        <div className='news'>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="content">
                <p>
                {content}
                </p>
            </div>
        </div>
    )
}

export default News
