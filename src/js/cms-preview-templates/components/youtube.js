import React from "react"

export default ({src}) =>
    <div className="fixedRatio fixedRatio-60">
        <iframe
            className="fixedRatio--contents"
            width="100%"
            frameBorder="0"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
