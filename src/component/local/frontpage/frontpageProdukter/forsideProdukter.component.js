
// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";


import './forsideProdukter.style.css'



const ProdukterForsideComponent = () => {

    return (
        <div className='forsideProdukterStyle'>

            <div className='forsideProdukterOverskrift'>
                <p className='produktoverskrift'>Nyeste bagværk</p>

                <p className='underProduktoverskrift'>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </div>

            <div className='forsideProduktHolder'></div>

        </div>
    )

}

export default ProdukterForsideComponent