import React from "react"

import GridBox from "./components/grid-box"
import PageHeader from "./components/page-header"
import MissionStatement from "./components/mission-statement"
import Press from "./components/press"
import TeamMember from "./components/team-member"

const buildTeamMember = getAsset => (tm, i) =>
    <TeamMember
        key={i}
        imageUrl={getAsset(tm.get("imageUrl"))}
        name={tm.get("name")}
        role={tm.get("role")}
        email={tm.get("email")}
    />

export default ({entry, getAsset}) => {
    const pageHeader = entry.getIn(["data", "pageHeader"])
    const teamMembers = entry.getIn(["data", "teamMembers"]) || []
    const advisors = entry.getIn(["data", "advisors"]) || []
    const directors = entry.getIn(["data", "directors"]) || []
    const clippings = entry.getIn(["data", "press"]) || []

    return <React.Fragment>
        <PageHeader
            imageUrl={getAsset(pageHeader.get("imageUrl"))}
            boxColor={pageHeader.get("boxColor")}
            title={pageHeader.get("title")}
            caption={pageHeader.get("caption")}
        />

        <section className="l-section">
            <MissionStatement text={entry.getIn(["data", "missionStatement"])}/>
        </section>

        <section class="l-section">
            <h2 class="sectionHeading sectionHeading-spaced">Our Team</h2>
            <GridBox columns={4} center>
                {teamMembers.map(buildTeamMember(getAsset))}
            </GridBox>
        </section>

        <section class="l-section">
            <h2 class="sectionHeading sectionHeading-spaced">Board of Directors</h2>
            <GridBox columns={3} center>
                {directors.map(buildTeamMember(getAsset))}
            </GridBox>
        </section>

        <section class="l-section">
            <h2 class="sectionHeading sectionHeading-spaced">Advisory Committee</h2>
            <GridBox columns={3} center>
                {advisors.map(buildTeamMember(getAsset))}
            </GridBox>
        </section>

        <section class="l-section">
            <h2 class="sectionHeading sectionHeading-centered sectionHeading-spaced">Hot off the Press</h2>
            <div class="gridBox gridBox-col1 gridBox-center">
                {clippings.map((clip, i) =>
                    <Press
                        boxColor={clip.get("boxColor")}
                        linkUrl={clip.get("linkUrl")}
                        imageUrl={clip.get("imageUrl")}
                        publication={clip.get("publication")}
                        headline={clip.get("headline")}
                        date={clip.get("date")}
                        text={clip.get("text")}
                    />
                )}
            </div>
        </section>
    </React.Fragment>
}
