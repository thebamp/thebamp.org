import React from "react"
import ReactMarkdown from "react-markdown"

export default ({boxColor, title, text, details, price, imageUrl}) =>
    <div className={`box box-${boxColor}`}>
        <div className="program">
            <div className="program--caption">
                <p className="program--title">{title}</p>
                <p className="program--text">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </p>
                <p className="program--details">{details}</p>
                <div className="program--bottom">
                    <a className="btnLink">Sign Up</a>
                    <p className="program--price">{price}</p>
                </div>
            </div>
            <img className="program--img" src={imageUrl}/>
        </div>
    </div>
