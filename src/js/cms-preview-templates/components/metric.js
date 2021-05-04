import React from "react";

export default ({imageUrl, number, label}) =>
    <div className="metric">
        <div className="metric--photo">
            <img src={imageUrl}/>
        </div>

        <p className="metric--stats">{number}</p>
        <p className="metric--text">{label}</p>
    </div>
