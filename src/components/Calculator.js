import React, { useState } from 'react'
import CalcOperators from './CalcOperators'
import Display from './Display'
import Keypad from './Keypad'
import Toggle from './Toggle'
import '../styles/Calculator.css'

const Calculator = () => {
    const [characters, setChars] = useState([]);
    let total = 0;

    const clearCharacters = () => {
        setChars([]);
    }

    const clearTotal = () => {
        total = 0;
    }

    const handleClear = () => {
        clearCharacters();
        clearTotal(); 
    }

    const handleTotal = () => {
        let index = 0;
        let numbers = [];
        let operands = [];
        let num = "";

        //Parse character array into individual numbers and operands
        for (let i of characters) { 
            if (typeof(i) === 'string') {
                operands.push(i);
                numbers[index] = num;
                num = "";
                index++;
            } else {
                num += i.toString();
            }
        }
        numbers[index] = num;
        
        index = 0;

        // Per operand, perform the required calculation
        for (let operand of operands) {
            let tmpNum = 0;
            switch (operand) {
                case '+':
                    console.log("ADDITION");
                    if (index > 0) {
                        tmpNum = total;
                    } else {
                        tmpNum = parseFloat(numbers[index]);
                    }
                    tmpNum += parseFloat(numbers[index + 1]);
                    total = tmpNum;
                    break;
                
                case '-':
                    console.log("SUBTRACTION");
                    if (index > 0) {
                        tmpNum = total;
                    } else {
                        tmpNum = parseFloat(numbers[index]);
                    }
                    tmpNum -= parseFloat(numbers[index + 1]);
                    total = tmpNum;
                    break;

                case '/':
                    console.log("DIVISION");
                    if (index > 0) {
                        tmpNum = total;
                    } else {
                        tmpNum = parseFloat(numbers[index]);
                    }
                    tmpNum /= parseFloat(numbers[index + 1]);
                    total = tmpNum;
                    break;

                case '*':
                    console.log("MULTIPLICATION");
                    if (index > 0) {
                        tmpNum = total;
                    } else {
                        tmpNum = parseFloat(numbers[index]);
                    }
                    tmpNum *= parseFloat(numbers[index + 1]);
                    total = tmpNum;
                    break;

                default:
                    total = 0;
                    break;
            }
            index++;
        }

        clearCharacters();
        setChars([total]);

        console.log("TOTAL: " + total);
    }

    const addChar = (char) => {
        if (char === "=") { 
            if(typeof(characters[characters.length - 1]) === 'string') {
                setChars(characters.pop());
                handleTotal(); 
            } else {
                handleTotal(); 
            }     
        } else if (char === "C" || char === "c") {
            handleClear();
        } else if (isNaN(char)) {

            // If the first button pressed is an operand
            if (characters.length === 0 && typeof(char) === 'string') {
                setChars(characters.push(total));
                setChars([...characters, char]);

            // If the last character and the current character are both operands
            } else if (typeof(characters[characters.length - 1]) === typeof(char)) {
                setChars(characters.pop());
                setChars([...characters, char]);
            } else {
                setChars([...characters, char]);
            }
        } else {
            setChars([...characters, parseFloat(char)]);
        };
        console.log(characters);
    }

    const [btnClassName, setBtnClassname] = useState("btn");
    const [genClassName, setGenClassname] = useState("light");

    const toggleDarkMode = (darkMode) => {
        if (darkMode) {
            setBtnClassname("btn darkMode");
            setGenClassname("dark");
        } else {
            setBtnClassname("btn");
            setGenClassname("light");
        }
    }

    return (
        <div id="calculator" className={genClassName}>
            <Display chars={characters} />
            <div id="calcPad">
                <Keypad className={btnClassName} addChar={addChar} />
                <CalcOperators className={btnClassName} addChar={addChar} />
            </div>
            <div id="dkMode">
                <label id="dkModeLabel">DARK MODE</label>
                <Toggle toggleDarkMode={toggleDarkMode} /> 
            </div>       
        </div>
    )
}

export default Calculator
