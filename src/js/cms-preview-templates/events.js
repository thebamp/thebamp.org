import React from "react"

import CalendarBox from "./components/calendar-box"
import Event from "./components/event"
import GridBox from "./components/grid-box"
import PhotoGrid from "./components/photo-grid"

export default ({entry, getAsset}) => {
    const events = entry.getIn(["data", "events"]) || []
    const photos = entry.getIn(["data", "photos"]) || []
    const calendarUrl = (
        "https://calendar.google.com/calendar/embed?" +
        "height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&" +
        "src=aWQ5ZmozZ2NnZzZsaGhhb2hxbGk3YTkxamNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&" +
        "color=%238E24AA&showTitle=1&showNav=0&showDate=0&showPrint=0&showTabs=0&showTz=0&showCalendars=1"
    )

    return <React.Fragment>
        <section className="l-section l-center">
            <h2 className="sectionHeading">Events</h2>
        </section>

        <section className="l-section">
            <div className="box box-red" style={{marginBottom: 0}}>
                <div className="infoCard">
                    <div className="infoCard--caption">
                        <p className="infoCard--title">Classes</p>
                        <p className="infoCard--text">Due to concerns over the outbreak of coronavirus (COVID-19) we have decided to postpone our in-person events and classes. Sign up for our email list to stay up to date with BAMP.</p>
                        <a className="btnLink getUpdates">Get Updates</a>
                    </div>
                </div>
            </div>
        </section>


        <section className="l-section l-center">
            <CalendarBox src={calendarUrl} />
        </section>

        <section className="l-section">
            <GridBox columns={2} center collapse>
                {events.map((ev, i) =>
                    <Event
                        key={i}
                        boxColor={ev.get("boxColor")}
                        imageUrl={getAsset(ev.get("imageUrl"))}
                        title={ev.get("title")}
                        description={ev.get("description")}
                        date={ev.get("date")}
                        linkUrl={ev.get("linkUrl")}
                    />
                )}
            </GridBox>
        </section>

        <section className="l-section">
            <h2 className="sectionHeading sectionHeading-sub sectionHeading-spaced sectionHeading-centered">Past Event Photos!</h2>
            <PhotoGrid photos={photos} />
        </section>
    </React.Fragment>
}
