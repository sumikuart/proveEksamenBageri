
// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

// Style
import './forsideProdukter.style.css'

const ProduktPoster = (props) => {


    console.log(props.currentProdukt[1].id)


        return(
            
            <div className='produktItemHolder'>

                <img src={props.currentProdukt[1].filename_absolute} alt=""/>

                <div className='nameItemHolder'>
                <p>{props.currentProdukt[1].title}</p>
                </div>

                <div className='teaserItemHolder'>
                    <p>{props.currentProdukt[1].teaser}</p>
                </div>

                <div className='moreInfoItemButton'>
                    <NavLink to='/'>Se Mere</NavLink>
                </div>

            </div>
        )
    

}

const ProdukterForsideComponent = (props) => {

const [produkter, setProdukter] = useState('')

const [loadingProdukt, setLoadingProdukt] = useState('loading')

    useEffect(()=>{ 
        axios.get('https://heka4.apache.techcollege.dk/api/products/')
        .then(response => {
            setProdukter(response.data)
        })
        setLoadingProdukt('done')
    },[])


if( loadingProdukt === 'loading' ) {

    return(
        <div>
            <p>loading</p>
        </div>
    )
} else {

    const produktMapper = (e) => {

        return Object.entries(produkter).map(function (currentProdukt, i) {

            if (i < 8) {
                return <ProduktPoster currentProdukt={currentProdukt} key={i} />
            }
            
        })
     }



    console.log(produkter[1])
    return (
        <div className='forsideProdukterStyle'>

            <div className='forsideProdukterOverskrift'>
                <p className='produktoverskrift'>Nyeste bagværk</p>

                <p className='underProduktoverskrift'>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </div>

            <div className='forsideProduktHolder'>

                {produktMapper()}


            </div>

        </div>
    )

}

}

export default ProdukterForsideComponent