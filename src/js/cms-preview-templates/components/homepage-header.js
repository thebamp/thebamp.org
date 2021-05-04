import React from "react";

export default ({items, getAsset}) => {
    const [first, ...rest] = items

    return <section className="homepageHeader">
        <div className="carousel js-carousel-homepage">
            <div className="homepageHeader">
                <img className="homepageHeader--img" src={getAsset(first.get("imageUrl"))}/>
                <img className="homepageHeader--svg" src="/img/homepage/speech-bubble.svg"/>
            </div>

            {rest.map((item, i) =>
                <img
                    key={i}
                    className="homepageHeader--img"
                    src={item.get("imageUrl")}
                />
            )}

            <video
                className="homepageHeader--img"
                style={{filter: "saturate(90%)"}}
                src="videos/drone-edit-v2.mp4"
                autoPlay
                muted
                playsInline
                loop
            />
        </div>
    </section>
}
