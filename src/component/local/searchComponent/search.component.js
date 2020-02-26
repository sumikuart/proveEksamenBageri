
// Main:
import React, { useContext,useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './search.style.css'



const SearchComponent = (props) => {

    const [selectedSearchWord, setSelectedSearchWord] = useState('')
    const [selectedPrevSearchWord, setSelectedPrevSearchWord] = useState('')

    const [searchLoader, setSearchLoader] = useState('loading')

    useEffect(()=>{ 

        // axios.get('https://heka4.apache.techcollege.dk/api/categories/')
        // .then(response => {
        //     setKategorier(response.data)
        // })
    
        setSelectedSearchWord(props.match.params.word)
        setSelectedPrevSearchWord(props.match.params.word)
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
                <p>{selectedSearchWord}</p>
            </div>
        )

    }

}

export default SearchComponent