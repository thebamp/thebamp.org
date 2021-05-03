import React from "react"

import Faq from "./components/faq"
import GridBox from "./components/grid-box"
import MapBox from "./components/map-box"
import WantAMural from "./components/want-a-mural"
import WeSeekTo from "./components/we-seek-to"
import Youtube from "./components/youtube"

export default ({entry, getAsset}) => {
    const faqs = entry.getIn(["data", "faqs"]) || []
    const murals = entry.getIn(["data", "murals"]) || []

    return <React.Fragment>
        <section className="l-section">
            <GridBox columns={2} collapse>
                <WeSeekTo/>
                <MapBox/>
            </GridBox>
        </section>
        <section className="l-section">
            <GridBox columns={3} center>
                {murals.map((mural, i) => {
                    return <button className={`muralThumbnail box box-${mural.get("boxColor")}`} key={i}>
                        <div className="muralThumbnail--img"><img src={getAsset(mural.get("thumbUrl"))}/></div>
                        <div className="muralThumbnail--caption">
                            <div className="muralThumbnail--location">{mural.get("location")}</div>
                            <div className="muralThumbnail--name">{mural.get("title")}</div>
                        </div>
                    </button>
                })}
            </GridBox>
        </section>
        <section className="l-section">
            <GridBox columns={2} collapse>
                <Youtube src="https://www.youtube.com/embed/OaKg3WeMKrI"/>
                <WantAMural/>
            </GridBox>
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
