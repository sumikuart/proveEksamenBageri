
// Main:
import React, { useContext,useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

import './forsideNyhedsbrev.style.css'

// images
import nyhedsbrevForsideBaggrund from '../../../../assets/forside/nyhedsbrev/newsletterbg.jpg'

const NyhedsbrevForsideComponent = () => {

    const [nyhedsBrevsEmail,setNyhedsBrevsEmail] = useState('')
    const [nyhedsBrevsresponsBesked,setNyhedsBrevsresponsBesked] = useState('')

    const handleNyhedsbrevsEmail = (e) => {
        setNyhedsBrevsEmail(e.target.value)
    }

    const validateEmail = (e) => {
        setNyhedsBrevsresponsBesked('checker')
        
        if(!nyhedsBrevsEmail.includes('@')  || !nyhedsBrevsEmail.includes('.')){   
            setNyhedsBrevsresponsBesked('Skriv venneligst en godkendt Email')
        }  

        if(nyhedsBrevsEmail == '') {
            setNyhedsBrevsresponsBesked('Vær vennelig at udfylde din Email')
        }
    }

    const tilmeldNyhedsbrev = () => {
        {validateEmail()}

        if(nyhedsBrevsresponsBesked == 'checker') {

            const mail = {email:nyhedsBrevsEmail}

            axios.post('http://localhost:4464/add/newsEmail', mail)
            .then(res => console.log(res.data))

            setNyhedsBrevsresponsBesked('tak for tilmeldningen')
            setNyhedsBrevsEmail('')

        }
    }

    return (
        <div className='forsideNyhedsBrevStyle'>

           <img src={nyhedsbrevForsideBaggrund} alt=""/>

           <div className='forsideNyhedsBrevContent'>

               <div className='forsideNyhedTekst'>
                   <p className='mainNyhedsOverskrift'>Tilmeld dig vores nyhedsbrev</p>
                   <p className='underMainNyhedsOverskrift'>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
               </div>

               <div className='forsideNyhedForm'>

                   <div className='nyhedslogo'>
                       <p>&#x2709;</p>
                   </div>

                   <form>
                       <input type="text" placeholder='indtast din email....' className='inputForMailNyhed' value={nyhedsBrevsEmail} onChange={handleNyhedsbrevsEmail} onBlur={validateEmail}/>
                   </form>

                   <div className='tilmeldKnap' onClick={tilmeldNyhedsbrev}>
                       <p>Tilmeld</p>
                   </div>

               </div>

               
               <p className='responsBesked'>{nyhedsBrevsresponsBesked}</p>


           </div>

        </div>
    )

}

export default NyhedsbrevForsideComponent