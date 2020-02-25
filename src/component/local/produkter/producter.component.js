// Main:
import React, { useContext, useEffect,  useState } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios'

import './producter.style.css'


const KategoriPoster = (props) => {

    return(

            <li><NavLink to={'/produkter/' + props.currentKategori[1].id}> {props.currentKategori[1].title} </NavLink></li>
 
    )
}

const SortetPorduktPoster = (props) => {
    return(
<div className='soteretProduktItemHolder'>
    <img src={props.currentSortetProdukt[1].filename_absolute} alt=""/>


    <div className='soteretProduktOverskrift'>
        <p>{props.currentSortetProdukt[1].title}</p>
    </div>
    
    <div className='soteretProduktBeskrivelse'>
        <p>{props.currentSortetProdukt[1].teaser}</p>
    </div>

    <div className='soteretProdukKnap'>
        <NavLink to={'/produkt/' + props.currentSortetProdukt[1].id} > se mere </NavLink>
    </div>

</div>
)
}



const ProductComponent = (props) => {

    const [loaderProdukt, setLoaderProdukt] = useState('loading')

    const [kategorier, setKategorier] = useState('')
    const [urlKategorier, setUrlKategorier] = useState(props.match.params.id)
    const [prevUrlKategorier, setPrevUrlKategorier] = useState(props.match.params.id)
    const [soteretProdukter, setSoteretProdukter] = useState('')


        useEffect(()=>{ 

            axios.get('https://heka4.apache.techcollege.dk/api/categories/')
            .then(response => {
                setKategorier(response.data)
            })


           
            axios.get('https://heka4.apache.techcollege.dk/api/products/getfromcategory/' +urlKategorier)
                .then(response => {
                    setSoteretProdukter(response.data)
                 })
            

            setLoaderProdukt('done')
            
     
        },[])

        useEffect(()=>{ 
            setUrlKategorier(props.match.params.id)

            if (urlKategorier != prevUrlKategorier){
                axios.get('https://heka4.apache.techcollege.dk/api/products/getfromcategory/' +urlKategorier)
                .then(response => {
                    setSoteretProdukter(response.data)
                 })

                 setPrevUrlKategorier(props.match.params.id)
            }

        })


    if(loaderProdukt === 'loading' ) {
        return(
            <div className='produkterStyle'>
                <p> Loading </p>
            </div>
        )
    } else {

        const kategoriMapper = (e) => {
            return Object.entries(kategorier).reverse().map(function (currentKategori,  i) {

                    return <KategoriPoster currentKategori={currentKategori} Key={i} />
                
            })
        }

        
        const produktMapper = (e) => { 

                return Object.entries(soteretProdukter).reverse().map(function (currentSortetProdukt,  i) {

                    return <SortetPorduktPoster currentSortetProdukt={currentSortetProdukt} Key={i}/>

        }) }


        return (
            <div className='produkterStyle'>
    
                <div className='produktIntroText'>
                    <p className='topProduktIntro'> Vores elskede bagværk</p>
                    <p className='lowProduktIntro'> Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud </p>
                </div>
    
                <div className='produktContentStyle'>
                    <div className='produktKategoriTræ'>
                        <ul>
                        {kategoriMapper()}
                        </ul>
                    </div>

                    <div className='produktItemShower'>
                    {produktMapper()}
                    </div>
                </div>
    
    
    
    
            </div>
        )
    }


}

export default ProductComponent