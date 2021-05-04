import React from "react"
import InfoCard from "./info-card"

// note: this can be refactored to use InfoCard
export default ({title, boxColor, imageUrl, text, linkUrl, linkText}) =>
    <React.Fragment>
        <h2 className="sectionHeading sectionHeading-centered sectionHeading-spaced">
            {`Featured: ${title}`}
        </h2>
        <InfoCard
            imageUrl={imageUrl}
            description={text}
            linkUrl={linkUrl}
            linkText={linkText}
            boxColor={boxColor}
        />
    </React.Fragment>
