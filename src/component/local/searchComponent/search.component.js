
// Main:
import React, { useContext,useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'
import FilterResults from "react-filter-search"


import './search.style.css'


// NOTE DETTE VIRKER IKKE. JSON API JEG HENTER KOMMER NED SOM OBJECT OG KAN IKKE FINDE EN ORDENLIG MÅDE AT KONCENTERE TIL ET ARRAY


const SearchComponent = (props) => {

    const [selectedSearchWord, setSelectedSearchWord] = useState('')
    const [searchLoader, setSearchLoader] = useState('loading')

    const [searchProduktData, setSearchProduktData] = useState('')
    const [searchIndgradiensData, setSearchIndgradiensData] = useState('')

    const [searchData, setSearchData] = useState([])


    useEffect(()=>{ 

        fetch('https://heka4.apache.techcollege.dk/api/products/')
                .then(response => response.json())
                .then((data) => {setSearchData(data)})


        setSelectedSearchWord(props.match.params.word)

        setSearchLoader('done')
    },[])

    useEffect(()=>{

            setSelectedSearchWord(props.match.params.word)
            

    })


    if (searchLoader == 'loading') {
        return ( 
            <div className='searchStyle'>
                <p>Loading</p>
            </div>
        )
    } else {




        return (
            <div className='searchStyle'>
                <p>Hej Fra Search</p>
                <p>{'du har søgt på: ' +selectedSearchWord}</p>



                <div>
                <FilterResults
                    value={selectedSearchWord}
                    data={searchData}

                    renderResults={results => (
                        <div className='searchFilterFlex'>
                            {results.map(produkter => (

                              
                                <div className='searchItem'>

                                <NavLink to={'/produkt/' + produkter.id}>

                                    <div className='postercontainer'>

                                        <div className='textContentSearch'>  
                                            <p>{produkter.title}</p>
                                            <p className='descriptionInSearch'>{produkter.teaser}</p>
                                        </div>
                                        
                                        <div className='imgContentSearch'>
                                        <img src={produkter.filename_absolute} alt=""/>
                                        </div>
                                    </div>

                                    
                                
                                </NavLink>

                                </div>

                            ))}
                        </div>
                    )}
                />
                </div>
            </div>
        )

    }

}

export default SearchComponent