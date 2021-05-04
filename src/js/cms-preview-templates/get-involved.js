import React from "react"

import Faq from "./components/faq"
import InfoCard from "./components/info-card"
import PageHeader from "./components/page-header"

export default ({entry, getAsset}) => {
    const cards = entry.getIn(["data", "cards"]) || []
    const faqs = entry.getIn(["data", "faqs"]) || []
    const pageHeader = entry.getIn(["data", "pageHeader"])

    return <React.Fragment>
        <PageHeader
            imageUrl={getAsset(pageHeader.get("imageUrl"))}
            boxColor={pageHeader.get("boxColor")}
            title={pageHeader.get("title")}
            caption={pageHeader.get("caption")}
        />

        <section class="l-section">
            {cards.map((card, i) =>
                <InfoCard
                    title={card.get("title")}
                    imageUrl={getAsset(card.get("imageUrl"))}
                    description={card.get("description")}
                    linkUrl={card.get("linkUrl")}
                    linkText={card.get("linkText")}
                    boxColor={card.get("boxColor")}
                />
            )}
        </section>

        <section className="l-section">
            <h2 className="sectionHeading sectionHeading-centered sectionHeading-spaced">Frequently Asked Questions</h2>
            {faqs.map((faq, i) =>
                <Faq
                    key={i}
                    question={faq.get("question")}
                    answer={faq.get("answer")}
                />
            )}
        </section>
    </React.Fragment>
}
