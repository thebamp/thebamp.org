import React from "react"
import ReactMarkdown from "react-markdown"

export default ({boxColor, imageUrl, title, description, date, linkUrl}) =>
    <div class={`box box-${boxColor}`}>
        <div class="event">
            <img class="event--img" src={imageUrl}/>
            <p class="event--title">{title}</p>
            <p class="event--text">
                <ReactMarkdown>{description}</ReactMarkdown>
            </p>
            <div class="event--bottom">
                <p class="event--when">When:</p>
                <p class="event--date">{date}</p>
                <a class="btnLink" href={linkUrl}>Learn More</a>
            </div>
        </div>
    </div>
