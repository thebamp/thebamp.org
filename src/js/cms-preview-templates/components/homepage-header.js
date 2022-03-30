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
        </div>
    </section>
}
