import React from 'react'
import '../styles/Display.css'

const Display = (props) => {

    return (
        <div id="displayContainer">
            <div id="calc">{props.chars}</div>
        </div>
    )
}

export default Display
