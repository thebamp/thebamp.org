import React from "react"

import Faq from "./components/faq"
import GridBox from "./components/grid-box"
import PageHeader from "./components/page-header"
import PhotoGrid from "./components/photo-grid"
import Program from "./components/program"
import YouTube from "./components/youtube"

export default ({entry, getAsset}) => {
    const pageHeader = entry.getIn(["data", "pageHeader"])
    const programs = entry.getIn(["data", "programs"]) || []
    const faqs = entry.getIn(["data", "faqs"]) || []
    const photos = entry.getIn(["data", "photos"]) || []

    return <React.Fragment>
        <PageHeader
            imageUrl={getAsset(pageHeader.get("imageUrl"))}
            boxColor={pageHeader.get("boxColor")}
            title={pageHeader.get("title")}
            caption={pageHeader.get("caption")}
        />

        <section className="l-section">
            {programs.map((pr, i) =>
                <Program
                    key={i}
                    boxColor={pr.get("boxColor")}
                    title={pr.get("title")}
                    text={pr.get("text")}
                    details={pr.get("details")}
                    price={pr.get("price")}
                    imageUrl={getAsset(pr.get("imageUrl"))}
                />
            )}
        </section>

        <section className="l-section">
            <center>
                <YouTube
                    style={{maxWidth: "1000px"}}
                    src="https://www.youtube.com/embed/BfKU5g2xqd8"
                />
            </center>
        </section>

        <section className="l-section">
            <h2 className="sectionHeading sectionHeading-sub sectionHeading-centered">Here are some pictures from our classes!</h2>
            <p className="l-center u-text-medium u-padBottom">
                Art has the power to open doors and therefore is an essential component of
                each young person’s education The Bay Area Mural Program takes great pride
                in offering different levels of art and mural training for all ages!
            </p>
            <PhotoGrid photos={photos} />
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
