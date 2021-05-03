import React from "react"

export default ({src}) =>
    <div className="calendarBox box box-blue">
        <iframe
          src={src}
          width="100%"
          scrolling="no"
          height={600}
          frameborder={0}
        />
    </div>
