// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";


import './kontakt.style.css'

// import img:
import map from '../../../assets/kontakt/map.jpg'

import { KontaktContext } from '../../../context/kontakt.context'

const KontaktComponent = () => {

    const { setKontaktNavnContext, setKontaktEmailContext, setKontaktBeskedContext } = useContext(KontaktContext)


    let history = useHistory()


    const [navnHolder, setNavnHolder] = useState('')
    const [emailHolder, setEmailHolder] = useState('')
    const [beskedHolder, setBeskedHolder] = useState('')

    
    const [navnHolderError, setNavnHolderError] = useState('')
    const [emailHolderError, setEmailHolderError] = useState('')
    const [beskedHolderError, setBeskedHolderError] = useState(' ')


    const handleNavnChange = (e) => {
        setNavnHolder(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmailHolder(e.target.value)   
    }
    
    const handleBeskedChange = (e) => {
        setBeskedHolder(e.target.value)   
    }


    // Validerings Functioner: 
    var hasNumber = /\d/;

    const validateNavn = (e) => {
        setNavnHolderError('')

        if(navnHolder == ''){
            setNavnHolderError('Vær vennelig at udfylde dit navn')
        }

        if(hasNumber.test(navnHolder)){
            setNavnHolderError('Der kan ikke være nummere i dit navn')
        } 


    } 

    const validateEmail = (e) => {
        setEmailHolderError('')
        
        if(!emailHolder.includes('@')  || !emailHolder.includes('.')){   
            setEmailHolderError('Der er fejl i Mail, skriv venneligst en godkendt Email')
        }  

        if(emailHolder == '') {
            setEmailHolderError('Vær vennelig at udfylde din Email')
        }

    } 
    
    const validateBesked = (e) => {
        setBeskedHolderError('')
        if(beskedHolder == '') {
            setBeskedHolderError('Udfyld venneligst din besked')
        }

    } 

    const sendBeskedFunction = (e) => {

        {validateNavn()}
        {validateEmail()}
        {validateBesked()}

        if(navnHolderError === '' && emailHolderError ==='' && beskedHolderError ==='') {

            setKontaktNavnContext(navnHolder)
            setKontaktEmailContext(emailHolder)
            setKontaktBeskedContext(beskedHolder)

            history.push('/kontakt/modtaget')
        }
    }

    return (
        <div className='kontaktStyle'>

            <p className='kontaktHeadline'>Kontakt os</p>
            <p className='kontaktUnderHeadline'>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
           
            <div className='kontaktErrorDiv'>
                    <p>{navnHolderError}</p>
                    <p>{emailHolderError}</p>
                    <p>{beskedHolderError}</p>
            </div>

            <div className='mainKontaktContent'>

                <div className='kontaktFormDiv'>
                    <form>
                        <input type="text" placeholder='Dit Navn...' value={navnHolder} onChange={handleNavnChange} onBlur={validateNavn}/>
                        <input type="text" placeholder='Din Email...'  value={emailHolder} onChange={handleEmailChange} onBlur={validateEmail}/>
                        <textarea placeholder='Din Besked...'  value={beskedHolder} onChange={handleBeskedChange} onBlur={validateBesked} />
                    </form>

                    <div className='kontaktSubmit' onClick={sendBeskedFunction}>
                        <p>Send</p>
                    </div>

                </div>

                <div className='KontaktMapDiv'>
                    <div className='kontaktAdresser'>
                        <p><span>Addresse:</span> Øster uttrupvej 1 9200 aalborg</p>
                        <p><span>Telefon:</span> +45 25 26 95 40</p>
                    </div>
                    <img src={map} alt="kort"/>
                </div>

            </div>

        </div>
    )

}

export default KontaktComponent