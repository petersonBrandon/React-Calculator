import React from 'react'
import '../styles/Btn.css'

const Button = (props) => {
    const handleClick = () => {
        props.onClick(props.title);
    }
    return (
        <button className={props.className} onClick={handleClick} >{props.title}</button>
    )
}

export default Button
