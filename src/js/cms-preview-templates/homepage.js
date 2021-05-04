import React from "react"

import Featured from "./components/featured"
import GridBox from "./components/grid-box"
import HomepageHeader from "./components/homepage-header"
import Metric from "./components/metric"
import ScrollCarousel from "./components/scroll-carousel"
import Testimonial from "./components/testimonial"

export default ({entry, getAsset}) => {
    const carousel = entry.getIn(["data", "carousel"]) || []
    const featured = entry.getIn(["data", "featured"]) || []
    const metrics = entry.getIn(["data", "metrics"]) || []
    const partners = entry.getIn(["data", "partners"]) || []
    const testimonials = entry.getIn(["data", "testimonials"]) || []

    return <React.Fragment>
        <HomepageHeader items={carousel} getAsset={getAsset}/>

        <section className="l-section">
            <h1 className="sectionHeading sectionHeading-centered sectionHeading-spaced">
                {entry.getIn(["data", "heading"])}
            </h1>
            <p className="l-section--text">{entry.getIn(["data", "text"])}</p>
        </section>

        <section className="l-section">
            <GridBox columns={4} collapse center>
                {metrics.map((mc, i) =>
                    <Metric
                        key={i}
                        number={mc.get("number")}
                        label={mc.get("label")}
                        imageUrl={getAsset(mc.get("imageUrl"))}
                    />
                )}
            </GridBox>
        </section>

        <section className="l-section">
            {featured.map((ft, i) =>
                <Featured
                    key={i}
                    title={ft.get("title")}
                    text={ft.get("text")}
                    imageUrl={getAsset(ft.get("imageUrl"))}
                    linkText={ft.get("linkText")}
                    linkUrl={ft.get("linkUrl")}
                    boxColor={ft.get("boxColor")}
                />
            )}
        </section>

        <section className="l-section" id="testimonials">
            <div className="carousel js-carousel-testimonials">
                {testimonials.map((ts, i) =>
                    <Testimonial
                        key={i}
                        name={ts.get("name")}
                        quote={ts.get("quote")}
                        imageUrl={getAsset(ts.get("imageUrl"))}
                    />
                )}
            </div>
        </section>

        <section className="l-section">
            <h2 className="sectionHeading sectionHeading-centered sectionHeading-spaced">Clients and Partners</h2>
            <ScrollCarousel items={partners} getAsset={getAsset}/>
        </section>
    </React.Fragment>
}
