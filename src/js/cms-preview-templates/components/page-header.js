import React from "react"

export default ({imageUrl, boxColor, title, caption}) =>
    <section className="pageHeader">
        <img className="pageHeader--img" src={imageUrl}/>
        <div className={`box box-${boxColor}`}>
            <h1 className="sectionHeading">{title}</h1>
            <p className="pageHeader--text">{caption}</p>
        </div>
    </section>
