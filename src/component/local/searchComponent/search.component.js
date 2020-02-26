
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

        axios.get('https://heka4.apache.techcollege.dk/api/products/')
        .then(response => {
            setSearchProduktData(response.data)
        })

        setSelectedSearchWord(props.match.params.word)

        setSearchData([])
    
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


console.log(Object.entries(searchProduktData))




        return (
            <div className='searchStyle'>
                <p>Hej Fra Search</p>
                <p>{'du har søgt på: ' +selectedSearchWord}</p>



                <div>
                <FilterResults
                    value={selectedSearchWord}
                    data={Object.entries(searchProduktData)}

                    renderResults={results => (
                        <div className='searchFilterFlex'>
                            {results.map(produkter => (

                                <div className='postercontainer'>

                                <p>{produkter.title}</p>

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