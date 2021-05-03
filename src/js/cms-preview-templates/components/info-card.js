import React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({boxColor, imageUrl, title, description, linkUrl, linkText}) =>
    <div className={`infoCard box box-${boxColor}`}>
        <img className="infoCard--img" src={imageUrl}/>
        <div className="infoCard--caption">
            <p className="infoCard--title">{title}</p>
            <p className="infoCard--text">
                <ReactMarkdown>{description}</ReactMarkdown>
            </p>
            <a className="btnLink" href={linkUrl}>{linkText}</a>
        </div>
    </div>
