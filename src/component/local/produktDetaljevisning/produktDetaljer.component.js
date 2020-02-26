
// Main:
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

import './produktDetaljer.style.css'
import KommentarComponent from './kommentarComponent/kommentar.component';

const IndgradiensPoster = (props) => {
    return(

        <div className='indgradiensItem'>
            
            <p>{props.currentIndgradiens[1].amount}{props.currentIndgradiens[1].unit_name + ' ' + props.currentIndgradiens[1].ingredient_title}</p>

        </div>

    )
}

const ProduktDetaljeComponent = (props) => {
    const [loaderProduktDetail, setLoaderProduktDetail] = useState('loading')
    const [produktDetaljer, setProduktDetaljer] = useState('')
    const [produktIndgradienser, setProduktIndgradienser] = useState('')



    const [likedStatus, setLikedStatus] = useState('normal')

    useEffect(() => {

        axios.get('https://heka4.apache.techcollege.dk/api/products/get/' + props.match.params.id)
            .then(response => {
                setProduktDetaljer(response.data)
            })

            axios.get('https://heka4.apache.techcollege.dk/api/ingredients/getfromproduct/' + props.match.params.id)
            .then(response => {
                setProduktIndgradienser(response.data)
            })


        console.log(produktDetaljer)

        setLoaderProduktDetail('done')
    }, [])


    // Functions:
    const likeCurrentItem = () => {
        if (likedStatus == 'normal') {
            setLikedStatus('liked')
        } else {
            setLikedStatus('normal')
        }
    }

    // Mapper: 

    const indgradiensMapper = (e) => {
        return Object.entries(produktIndgradienser).map(function (currentIndgradiens, i) {


                return <IndgradiensPoster currentIndgradiens={currentIndgradiens} key={i} />
            
            
        })
    }

    if (loaderProduktDetail == 'loading') {
        return (
            <div className='produktDetaljeStyle'>
                <p>Loading</p>
            </div>
        )
    } else {

        return (
            <div className='produktDetaljeStyle'>

                <div className='navigationTree'>

                    <NavLink to='/produkter/5'>produkter</NavLink>
                    <p> > </p>
                    <p>{produktDetaljer.title}</p>

                </div>


                <div className='detaljeTop'>

                    <div className='detaljeoverskrift'>

                        <p>{produktDetaljer.title}</p>

                    </div>

                    <div className='detaljeLike' onClick={likeCurrentItem}>

                        <p>LIKE!</p>
                        <p className={'hjerteSymbolBase ' + likedStatus}>&#x2661;</p>
                        <p className={'hjerteSymbolFull ' + likedStatus}>&#x2665;</p>

                    </div>
                </div>


                <div className='mainDetajleContent'>

                    <div className='detaljeBeskrivelse'>

                        <img src={produktDetaljer.filename_absolute} alt=""/>

                        <p>{produktDetaljer.description}</p>

                    </div>

                    <div className='detaljeIndgradienser'>
                        <p className='indgradienserOverskrift'>Indgradienser</p>

                        <div className='indgradiensHolder'>
                            {indgradiensMapper()}
                        </div>
                    </div>

                </div>

                <div>
                    <KommentarComponent selectedProdukt={props.match.params.id}/>
                </div>
            </div>
        )

    }


}

export default ProduktDetaljeComponent