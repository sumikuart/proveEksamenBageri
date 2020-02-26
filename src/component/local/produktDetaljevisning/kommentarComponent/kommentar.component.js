

// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './kommentar.style.css'



const KommentarComponent = (props) => {


    // Dette er id'et fra produktet. brug det til at linke kommentar til produkter
    const [kommentarSelector, setKommentarSelector] = useState(props.selectedProdukt)


    return (
        <div className='kommentarStyle'>

            <div className='kommentarStart'>
                <p>KOMMENTAR</p>
            </div>

            <div className='kommentarInput'>

                <div className='kommentarFlexer'>

                    <div className='kommentarIconDiv'>
                    </div>

                    <form>
                        <input type="text" placeholder='fortæl os hvad du synes.....' />
                    </form>
                </div>

                <div className='tilføjKommentarKnap'>
                    <p>indsæt</p>
                </div>
            </div>


        </div>
    )

}

export default KommentarComponent