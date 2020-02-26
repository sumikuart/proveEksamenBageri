import React, { createContext, useState, useEffect } from 'react';


export const KontaktContext = createContext();



const KontaktContextProvider = (props) => {

    const [kontaktNavn, setKontaktNavn] = useState('Intet Navn')
    const [kontaktMail, setKontaktMail] = useState('navn@domæne.com')
    const [kontaktNote, setKontaktNote] = useState('ingen besked')

    const setKontaktNavnContext = (navnData) => {
        setKontaktNavn(navnData)
    }

    const setKontaktEmailContext = (emailData) => {
        setKontaktMail(emailData)
    }

    const setKontaktBeskedContext = (noteData) => {
        setKontaktNote(noteData)
    }

    return( 

        <KontaktContext.Provider value={{kontaktNavn, kontaktMail, kontaktNote, kontaktNote, setKontaktNavnContext, setKontaktEmailContext, setKontaktBeskedContext}}>
            {props.children}
        </KontaktContext.Provider>
        
    )
    
}

export default KontaktContextProvider