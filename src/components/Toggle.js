import React from 'react'
import '../styles/Toggle.css'

const Toggle = (props) => {
    const toggleDarkMode = (e) => {
        const checked = e.target.checked;
        props.toggleDarkMode(checked);
    }

    return (
        <label class="switch">
            <input type="checkbox" onClick={(e) => {toggleDarkMode(e)}}></input>
            <span class="slider round"></span>
        </label>
    )
}

export default Toggle
