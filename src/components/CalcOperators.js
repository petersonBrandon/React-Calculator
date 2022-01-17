import React from 'react'
import Btn from './Btn'
import '../styles/CalcOperators.css'

const className = "calcBtn";

const CalcOperators = (props) => {
    return (
        <div id="calcOperatorContainer">
            <div>
                <Btn title="/" className={className} onClick={props.addChar} />
                <Btn title="*" className={className} onClick={props.addChar} />
            </div>
            <div>
                <Btn title="-" className={className} onClick={props.addChar} />
                <Btn title="+" className={className} onClick={props.addChar} />
            </div>
            <div>
                <Btn title="C" className={className} onClick={props.addChar} />
                <Btn title="=" className={className} onClick={props.addChar} />
            </div>
        </div>
    )
}

export default CalcOperators
