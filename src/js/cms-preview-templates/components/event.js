import React from "react"
import ReactMarkdown from "react-markdown"

export default ({boxColor, imageUrl, title, description, date, linkUrl}) =>
    <div className={`box box-${boxColor}`}>
        <div className="event">
            <img className="event--img" src={imageUrl}/>
            <p className="event--title">{title}</p>
            <p className="event--text">
                <ReactMarkdown>{description}</ReactMarkdown>
            </p>
            <div className="event--bottom">
                <p className="event--when">When:</p>
                <p className="event--date">{date}</p>
                <a className="btnLink" href={linkUrl}>Learn More</a>
            </div>
        </div>
    </div>
