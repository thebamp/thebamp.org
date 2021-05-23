import React from "react"

export default ({mapUrl}) =>
    <div className="mapBox box box-yellow">
        <div className="mapBox--map">
            <iframe src={mapUrl} width="100%" height="100%"></iframe>
        </div>
        <div className="mapBox--heading">BAMP Mural Map</div>
        <div className="mapBox--text">The Bay Area Mural Program has painted murals from Vallejo to San Leandro.
        Look for the closest BAMP Mural on your next commute through the Bay Area.</div>
    </div>
