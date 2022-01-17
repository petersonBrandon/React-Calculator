import React from 'react'
import Btn from './Btn'

const Keypad = (props) => {
    return (
        <div>
            <div id="numPadTop" className="numLine">
                <Btn title="9" className={props.className} onClick={props.addChar} />
                <Btn title="8" className={props.className} onClick={props.addChar} />
                <Btn title="7" className={props.className} onClick={props.addChar} />
            </div>
            <div id="numPadMid" className="numLine">
                <Btn title="6" className={props.className} onClick={props.addChar} />
                <Btn title="5" className={props.className} onClick={props.addChar} />
                <Btn title="4" className={props.className} onClick={props.addChar} />
            </div>
            <div id="numPadBottom" className="numLine">
                <Btn title="3" className={props.className} onClick={props.addChar} />
                <Btn title="2" className={props.className} onClick={props.addChar} />
                <Btn title="1" className={props.className} onClick={props.addChar} />
            </div>
            <Btn title="0" className={props.className} onClick={props.addChar} />
        </div>
        
    )
}

export default Keypad
