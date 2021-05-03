import React from "react"

export default ({columns = 4, center = false, collapse = false, children}) => {
    let className = `gridBox gridBox-col${columns}`

    if (center) {
        className += " gridBox-center"
    }

    if (collapse) {
        className += ` gridBox-col${columns}-collapse`
    }

    return <div className={className}>
        {children}
    </div>
}
