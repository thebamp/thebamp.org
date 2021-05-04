import React from "react";

export default ({imageUrl, name, quote}) =>
    <div className="testimonial">
        <div className="testimonial--pic">
            <img src={imageUrl}/>
        </div>
        <div className="testimonial--content">
            <span className="testimonial--name">{name}</span>
            <p className="testimonial--quote">“{quote.trim()}”</p>
        </div>
    </div>
