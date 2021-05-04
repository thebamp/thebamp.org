import React from "react"

import InfoCard from "./components/info-card"
import PageHeader from "./components/page-header"

export default ({entry, getAsset}) => {
    const cards = entry.getIn(["data", "cards"]) || []
    const pageHeader = entry.getIn(["data", "pageHeader"])

    return <React.Fragment>
        <PageHeader
            imageUrl={getAsset(pageHeader.get("imageUrl"))}
            boxColor={pageHeader.get("boxColor")}
            title={pageHeader.get("title")}
            caption={pageHeader.get("caption")}
        />

        <section className="l-section">
            {cards.map((card, i) =>
                <InfoCard
                    key={i}
                    title={card.get("title")}
                    imageUrl={getAsset(card.get("imageUrl"))}
                    description={card.get("description")}
                    linkUrl={card.get("linkUrl")}
                    linkText={card.get("linkText")}
                    boxColor={card.get("boxColor")}
                />
            )}
        </section>
    </React.Fragment>
}
