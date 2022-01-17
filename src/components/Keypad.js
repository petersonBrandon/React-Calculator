import React from 'react'
import Btn from './Btn'
import '../styles/Keypad.css'

const className = 'keyPadBtn';

const Keypad = (props) => {
    return (
        <div>
            <div id="numPadTop" className="numLine">
                <Btn title="9" className={className} onClick={props.addChar} />
                <Btn title="8" className={className} onClick={props.addChar} />
                <Btn title="7" className={className} onClick={props.addChar} />
            </div>
            <div id="numPadMid" className="numLine">
                <Btn title="6" className={className} onClick={props.addChar} />
                <Btn title="5" className={className} onClick={props.addChar} />
                <Btn title="4" className={className} onClick={props.addChar} />
            </div>
            <div id="numPadBottom" className="numLine">
                <Btn title="3" className={className} onClick={props.addChar} />
                <Btn title="2" className={className} onClick={props.addChar} />
                <Btn title="1" className={className} onClick={props.addChar} />
            </div>
            <Btn title="0" className={className} onClick={props.addChar} />
        </div>
        
    )
}

export default Keypad
