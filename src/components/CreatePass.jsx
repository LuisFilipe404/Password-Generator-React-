import { useState } from 'react'

import BtnSubmit from "./BtnSubmit";

import styles from "./CreatePass.module.css";


function CreatePass ({ range, letter, number, sc }) {

    
    // Função para determinar a sequencia de caracteres de acordo com as condições
    
    function getChar (letter, number, sc) {
        var char = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var num = "0123456789"
        var schar = "!#$%&()*+/<=>?@[]_{|}"

        if (letter === true && number === false && sc === false) {
            return char
        } else if (letter === true && number === true && sc === false) {
            return char + num
        } else if (letter === true && number === false && sc === true) {
            return char + schar
        } else if (letter === true && number === true && sc === true) {
            return char + schar + num
        } else if (letter === false && number === true && sc === false) {
            return num
        } else if (letter === false && number === true && sc === true) {
            return num + schar
        } else if (letter === false && number === false && sc === false) {
            return ''
        } else {return schar}
    }

    // Função para gerar a senha baseado no retorno dos caracteres

    function generatePass (chars) {
        var pass // senha
        var stringLength = range; // tamanho da senha
	    pass = '';
        for (var i=0; i < stringLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            pass += chars.substring(rnum,rnum+1);
	    } // gerar senha

        return pass
    }

    
    var [pass, setPass] = useState() // Pegar o valor da senha gerada

    // onClick

    function clickButton () {
        var receiveChar = getChar(letter, number, sc) //Executar a funchar getChar e atribuir o retorno a variável
        var getPass = generatePass(receiveChar) //Executar a função generatePass e atribuir o retorno a variável
        if (getPass === '') {
            getPass = 'Seleciona ao menos 1 opção'
        } else if (getPass.length > 16) {
            getPass = 'Número máximo de caracteres é 16'
        }
        setPass(getPass) //Mandar o getPass para o useState
        
    }

    return (
        <div className={styles.container}>
            <BtnSubmit createPass={clickButton}/>
            <p>{pass}</p>
        </div>
    )
}

export default CreatePass