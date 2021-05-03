import React from "react"

export default ({ imageUrl, title, leadArtist, location, date }) =>
    <div className="muralModal">
        <div className="muralModal--img"><img src={imageUrl}/></div>
        <div className="muralModal--caption">
            <h2 className="muralModal--name">{title}</h2>
            <button className="muralModal--close" aria-label="Close">×</button>
            <p>
                <img className="muralModal--icon" src="/img/icons/palette.svg"/>
                <span className="muralModal--bold">Lead Artist</span><span className="muralModal--text">: {leadArtist}</span>
            </p>
            <p>
                <img className="muralModal--icon" src="/img/icons/map-marker.svg"/>
                <span className="muralModal--bold">Location</span><span className="muralModal--text">: {location}</span>
            </p>
            <div className="muralModal--end">
                <img className="muralModal--icon" src="/img/icons/calendar.svg"/>
                <span className="muralModal--bold">Date</span><span className="muralModal--text">: {date}</span>
            </div>
        </div>
    </div>
