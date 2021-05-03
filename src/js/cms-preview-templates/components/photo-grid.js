import React from "react"

export default ({ photos }) =>
    <React.Fragment>
        <div className="u-onlyDesktop gridBox gridBox-center gridBox-col3">
            {photos.map(p =>
                <div className="fixedRatio fixedRatio-60">
                    <img className="fixedRatio--contents" src={p.get("imageUrl")}/>
                </div>
            )}
        </div>
        <div className="u-onlyMobile carousel js-carousel-standard">
            {photos.map(p =>
                <img className="carousel--item carousel--item-cover" src={p.get("imageUrl")}/>
            )}
        </div>
    </React.Fragment>
