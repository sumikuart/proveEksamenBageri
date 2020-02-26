

// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './kontaktsvar.style.css'

// context
import { KontaktContext } from '../../../../context/kontakt.context'

// Billeder: 
import svarBillede from '../../../../assets/forside/articler/article3.jpg'
const KontaktSvarComponent = () => {

    const { kontaktNavn, kontaktMail, kontaktNote } = useContext(KontaktContext)

    console.log(kontaktNavn)

    return (
        <div className='kontaktSvarStyle'>

            <div className='navigationTreeKontakt'>

                <NavLink to='/'>Forside</NavLink>
                <p>></p>
                <NavLink to='/kontakt'>Kontakt</NavLink>
                <p>></p>
                <p>Svar Modtaget</p>
            </div>

            <p className='kontaktSvareHeadline'>Mange Tak For beskeden!</p>

            <div className='kontaktSvarContent'>
                <div className='kontaktSvarTekst'>

                    <p className='svarTekstIntro'>Du har sendt følgende til os:</p>

                    <p className='kontaktSvarKategori'>Navn:</p>
                    <p className='kontaktSvarData'>{kontaktNavn}</p>
                    <p className='kontaktSvarKategori'>Email:</p>
                    <p className='kontaktSvarData'>{kontaktMail}</p>
                    <p className='kontaktSvarKategori'>Besked:</p>
                    <p className='kontaktSvarDataNote'>{kontaktNote}</p>
                </div>

                <div className='kontaktSvarBillede'>
                    <img src={svarBillede} alt="" />
                </div>
            </div>
        </div>
    )

}

export default KontaktSvarComponent