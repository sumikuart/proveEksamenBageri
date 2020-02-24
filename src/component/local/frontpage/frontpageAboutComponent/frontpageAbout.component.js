// Note: Dette er et tomt component, beregent til når du bruger React Hooks. 

// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";


import './frontpageAbout.style.css'



const AboutFrontPageComponent = () => {

    return (
        <div className='aboutStyle'>

        <p className='overskrift'> Vi skaber lækkert brød</p>

        <div className='underOverSkrift'>
          <p > Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        </div>

        <div className='forsideNyhedsDiv'></div>

        </div>
    )

} 

export default AboutFrontPageComponent