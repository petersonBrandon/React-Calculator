import React from 'react'

const Button = (props) => {
    const handleClick = () => {
        props.onClick(props.title);
    }
    return (
        <button className={props.className} onClick={handleClick} >{props.title}</button>
    )
}

export default Button
