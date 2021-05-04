import React from "react";

export default ({items, getAsset}) =>
    <div className="scrollCarousel">
        <div className="scrollCarousel--contents">
            {items.map((item, i) =>
                <a href={item.get("linkUrl")} key={i}>
                    <img src={getAsset(item.get("imageUrl"))}/>
                </a>
            )}
        </div>
    </div>
