import { useState } from 'react'

import CreatePass from './CreatePass'
import BtnSubmit from './BtnSubmit'
import Input from "./inputs/Input"
import Range from "./inputs/Range"
import styles from "./Options.module.css"

function Options () {

    // Captura o Input de Range
    const [range, setRange] = useState (8)

    function getRange (e) {
        setRange(e.target.value)
    }

    // Captura se vai ter numero ou não
    const [number, setNumber] = useState (false)

    function getNumber (e) {
        setNumber(!number)
    } // Seta o number como o oposto do mesmo, se ele inicia falso, ficar verdadeiro ao clicar

    // Captura se vai ter letra ou não
    const [letter, setLetter] = useState (false)

    function getLetter (e) {
        setLetter(!letter)
    }

    // Sc = Special Character
    
    const [sc, setSc] = useState (false)

    function getSc () {
        setSc(!sc)
    } 

    return <div>
        <p className={styles.txt}>Insira o tamanho da senha:</p>
        <Range getRange={getRange} range={range}/>

        <div className={styles.ipt}>
            <Input name="number" label="Números" getInput={getNumber}/>
            <Input name="letters" label="Letras" getInput={getLetter}/>
            <Input name="specialChar" label="Caracteres Especiais" getInput={getSc}/>
        </div>

        <CreatePass range={range} letter={letter} number={number} sc={sc}/>
        
    </div>
}

export default Options