import React from "react"

export default ({boxColor, linkUrl, imageUrl, publication, headline, date, text}) =>
    <a className={`press box box-${boxColor}`} href={linkUrl}>
        <img className="press--img" src={imageUrl}/>
        <div className="press--container">
            <div className="press--name">{publication}</div>
            <p className="press--headline">{headline}</p>
            <p className="press--date">{date}</p>
            <p className="press--text">{text}</p>
        </div>
    </a>
