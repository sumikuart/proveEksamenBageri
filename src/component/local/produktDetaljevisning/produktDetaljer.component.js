
// Main:
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

import './produktDetaljer.style.css'



const ProduktDetaljeComponent = (props) => {
    const [loaderProduktDetail, setLoaderProduktDetail] = useState('loading')

    const [produktDetaljer, setProduktDetaljer] = useState('')


    useEffect(()=>{ 

        axios.get('https://heka4.apache.techcollege.dk/api/products/get/' + props.match.params.id)
        .then(response => {
            setProduktDetaljer(response.data)
        })

        console.log(produktDetaljer)

        setLoaderProduktDetail('done')        
    },[])

    

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

                    <p>{ produktDetaljer.title}</p>

                </div>

         
            </div>
        )

    }


}

export default ProduktDetaljeComponent