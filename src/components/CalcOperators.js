import React from 'react'
import Btn from './Btn'
import '../styles/CalcOperators.css'

const CalcOperators = (props) => {
    return (
        <div id="calcOperatorContainer">
            <div>
                <Btn title="/" className={props.className} onClick={props.addChar} />
                <Btn title="*" className={props.className} onClick={props.addChar} />
            </div>
            <div>
                <Btn title="-" className={props.className} onClick={props.addChar} />
                <Btn title="+" className={props.className} onClick={props.addChar} />
            </div>
            <div>
                <Btn title="C" className={props.className} onClick={props.addChar} />
                <Btn title="=" className={props.className} onClick={props.addChar} />
            </div>
        </div>
    )
}

export default CalcOperators
