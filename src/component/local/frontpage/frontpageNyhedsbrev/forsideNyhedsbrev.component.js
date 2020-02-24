
// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";


import './forsideNyhedsbrev.style.css'

// images
import nyhedsbrevForsideBaggrund from '../../../../assets/forside/nyhedsbrev/newsletterbg.jpg'

const NyhedsbrevForsideComponent = () => {

    return (
        <div className='forsideNyhedsBrevStyle'>

           <img src={nyhedsbrevForsideBaggrund} alt=""/>

           <div className='forsideNyhedsBrevContent'>

               <div className='forsideNyhedTekst'>
                   <p className='mainNyhedsOverskrift'>Tilmeld dig vores nyhedsbrev</p>
                   <p className='underMainNyhedsOverskrift'>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
               </div>

               <div className='forsideNyhedForm'>

                   <div className='nyhedslogo'></div>

                   <form>
                       <input type="text" placeholder='indtast din email....' className='inputForMailNyhed'/>
                   </form>


                   <div className='tilmeldKnap'>
                       <p>Tilmeld</p>
                   </div>

               </div>

           </div>

        </div>
    )

}

export default NyhedsbrevForsideComponent