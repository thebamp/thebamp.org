import React from "react"
import ReactMarkdown from "react-markdown"

const WeSeekTo = () =>
    <div>
        <h1 className="sectionHeading">Artwork</h1>
        <p className="u-text-medium">As muralists, we seek to...</p>
        <ul className="u-text-medium u-text-2xHeight">
            <li>Use art to promote community engagement and development</li>
            <li>Help communities express themselves and find/explore the power of the visual voice</li>
            <li>Help share the unique story of each community</li>
            <li>Develop neighborhood  beautification projects and reclaim public spaces</li>
            <li>Teach a high quality process of fine-art making in the creation of a community mural</li>
        </ul>
    </div>

const MapBox = () =>
    <div className="mapBox box box-yellow">
        <div className="mapBox--map">
            <iframe src="https://www.google.com/maps/d/embed?mid=1YPg9qBdOFU1nlOm3w-o7S4aSDs1JT_Kw" width="100%" height="100%"></iframe>
        </div>
        <div className="mapBox--heading">BAMP Mural Map</div>
        <div className="mapBox--text">The Bay Area Mural Program has painted murals from Vallejo to San Leandro.
        Look for the closest BAMP Mural on your next commute through the Bay Area.</div>
    </div>

const Youtube = ({src}) =>
    <div className="fixedRatio fixedRatio-60">
        <iframe
            className="fixedRatio--contents"
            width="100%"
            frameBorder="0"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>

const WantAMural = src =>
    <div className="wantMural">
        <h2 className="sectionHeading">Want a Mural?</h2>
        <p>
            Bay Area Mural Program is committed to exceeding your public art needs.
            We have designers and muralist that specialize in bringing your ideas to life.
        </p>
        <p>
            Questions, comments or special requests?
            We’d love to hear from you, so don’t hesitate to reach out today.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScleB8nGhBEP3J1lAEBID67345OBiwmmRJ_aD7ZinMgSqXp8g/viewform" className="btnLink">Click Here</a>
    </div>

export default class ArtworkPreview extends React.Component {
    render() {
        const {entry, getAsset} = this.props
        const faqs = entry.getIn(["data", "faqs"]) || []
        const murals = entry.getIn(["data", "murals"]) || []

        return (
            <div>
                <section className="l-section">
                    <div className="gridBox gridBox-col2 gridBox-col2-collapse">
                        <WeSeekTo/>
                        <MapBox/>
                    </div>
                </section>
                <section className="l-section">
                    <div className="gridBox gridBox-col3 gridBox-center">
                        {murals.map((mural, i) => {
                            return <button className={`muralThumbnail box box-${mural.get("boxColor")}`}
                                    data-mural-name={mural.get("id")} key={i}>
                                <div className="muralThumbnail--img"><img src={getAsset(mural.get("thumbUrl"))}/></div>
                                <div className="muralThumbnail--caption">
                                    <div className="muralThumbnail--location">{mural.get("location")}</div>
                                    <div className="muralThumbnail--name">{mural.get("title")}</div>
                                </div>
                            </button>
                        })}
                    </div>
                </section>
                <section className="l-section">
                    <div className="gridBox gridBox-col2 gridBox-col2-collapse">
                        <Youtube src="https://www.youtube.com/embed/OaKg3WeMKrI"/>
                        <WantAMural/>
                    </div>
                </section>
                <section className="l-section">
                    <h2 className="sectionHeading sectionHeading-centered sectionHeading-spaced">Frequently Asked Questions</h2>
                    {faqs.map((faq, i) =>
                        <div className="faq faq-is-open" key={i}>
                            <button className="faq--questionBox">
                                <div className="faq--question">{faq.get("question")}</div>
                                <div className="faq--plus">+</div>
                            </button>
                            <div className="faq--answer">
                                <ReactMarkdown>{faq.get("answer")}</ReactMarkdown>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}
