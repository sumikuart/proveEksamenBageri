
// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";


import './nybruger.style.css'



const NybrugerComponent = () => {

    const [nyBrugerNavn, setNyBrugerNavn] = useState('')
    const [nyBrugerEmail, setNyBrugerEmail] = useState('')
    const [nyBrugerPassword, setNyBrugerPassword] = useState('')
    const [gentagetPassword, setGentagetPassword] = useState('')

    const [errorNyBrugerNavn, setErrorNyBrugerNavn ]= useState('')
    const [errorNyBrugerEmail, setErrorNyBrugerEmail ]= useState('')    
    const [errorNyBrugerPassword, setErrorNyBrugerPassword ]= useState('')
    const [errorNyBrugerGentagetPassword, setErrorNyBrugerGentagetPassword ]= useState('')

    const [oprettelsesBesked, setOprettelsesBesked] = useState('')


    const onchangeNyBrugerNavn = (e) => {
        setNyBrugerNavn(e.target.value)
    }

    const onchangeNyBrugerEmail = (e) => {
        setNyBrugerEmail(e.target.value)
    }
    const onchangeNyBrugerPassword = (e) => {
        setNyBrugerPassword(e.target.value)
    }
    const onchangeGentagetPassword = (e) => {
        setGentagetPassword(e.target.value)
    }

    var hasNumber = /\d/;

    const validateNyBrugerNavn = (e) => {

        if(nyBrugerNavn == '' || hasNumber.test(nyBrugerNavn) ){
            setErrorNyBrugerNavn('Navn er ikke godkendt')
        } else {
            setErrorNyBrugerNavn('') 
        }

    }
    

    const validateNyBrugerEmail = (e) => {
        if(nyBrugerEmail == '' || !nyBrugerEmail.includes('@')  || !nyBrugerEmail.includes('.')){   
            setErrorNyBrugerEmail('Der er fejl i Mail')
        }  else {
            setErrorNyBrugerEmail('')
        }

    }
    const validateNyBrugerPassword = (e) => {
        if(nyBrugerPassword == '') {
            setErrorNyBrugerPassword('Der er ikke indtastet et gyldig password')
        } else {
            setErrorNyBrugerPassword('')
        }
    }
    const validateNyBrugerGentagetPassword = (e) => {
        if (gentagetPassword != nyBrugerPassword) {
            setErrorNyBrugerGentagetPassword('Stemmer ikke over ens med andet password')
        } else  if(gentagetPassword == '') {
            setErrorNyBrugerGentagetPassword('Der er ikke indtastet et gyldig password')
        } else { 
            setErrorNyBrugerGentagetPassword('')
        }
    }


    const makeNewUser = (e) => {
        {validateNyBrugerNavn()}
        {validateNyBrugerEmail()}
        {validateNyBrugerPassword()}
        {validateNyBrugerGentagetPassword()}

        if(errorNyBrugerNavn =='' && errorNyBrugerEmail == '' && errorNyBrugerPassword == '' && errorNyBrugerGentagetPassword == '') {

            setOprettelsesBesked('Velkommen til ' +  nyBrugerNavn + ' Du er nu oprettet')

            setNyBrugerNavn('')
            setNyBrugerEmail('')
            setNyBrugerPassword('')
            setGentagetPassword('')
        }

    }


    return (
        <div className='nybrugerStyle'>


            <p className='nyBrugerHeadline'>Ny Bruger</p>

            <p className='oprettelsesBesked'>{oprettelsesBesked}</p>

            <div className='nyBrugerFormHolder'>

                <form>
                    <div>
                        <label>Dit Navn:</label>
                        <input type="text" placeholder='Dit Navn....' value={nyBrugerNavn} onChange={onchangeNyBrugerNavn} onBlur={validateNyBrugerNavn}/>
                        <p>{errorNyBrugerNavn}</p>
                    </div>

                    <div>
                        <label>Din Email:</label>
                        <input type="text" placeholder='Din Email....' value={nyBrugerEmail} onChange={onchangeNyBrugerEmail} onBlur={validateNyBrugerEmail}/>
                        <p>{errorNyBrugerEmail}</p>
                    </div>

                    <div>
                        <label>Dit kodeord:</label>
                        <input type="password" placeholder='Dit kodeord....' value={nyBrugerPassword} onChange={onchangeNyBrugerPassword} onBlur={validateNyBrugerPassword}/>
                        <p>{errorNyBrugerPassword}</p>
                    </div>

                    <div>
                        <label>Gentag dit kodeord:</label>
                        <input type="password" placeholder='Gentag dit kodeord....' value={gentagetPassword} onChange={onchangeGentagetPassword} onBlur={validateNyBrugerGentagetPassword}/>
                        <p>{errorNyBrugerGentagetPassword}</p>
                    </div>
                </form>

                <div className='laveBrugerKnap' onClick={makeNewUser}>
                    <p>Lav Bruger</p>
                </div>

            </div>



        </div>
    )

}

export default NybrugerComponent