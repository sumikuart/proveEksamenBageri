// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";

// CSS:
import './navigation.style.css'




const NavigationComponent = () => {

    let history = useHistory()

    const [currentNavUrl, setCurrentNavUrl] = useState('')
    const [backgroundStyleType, setBackgroundStyleType] = useState('NavigationBackdropOff')

    useEffect(()=>{ 
        setCurrentNavUrl(history.location.pathname)
     },[])

     
    useEffect(()=>{ 

        setCurrentNavUrl(history.location.pathname)

          if (currentNavUrl === '/') {
            setBackgroundStyleType('NavigationBackdropOff')
        } else {
            setBackgroundStyleType('NavigationBackdropOn')
        }
     })
     



    return(
        <div className={'navStyle ' + backgroundStyleType}>

            <nav>
                <ul>
                    <li><NavLink to='/' className='normalNav'>FORSIDE</NavLink></li>
                    <li><NavLink to='/produkter' className='normalNav'>PRODUKTER</NavLink></li>

                    <li><NavLink to='/' className='logoNav'>bageriet</NavLink></li>
                    
                    <li><NavLink to='/kontakt' className='normalNav'>KONTAKT</NavLink></li>
                    <li><NavLink to='/login' className='normalNav'>LOGIN</NavLink></li>
                </ul>
            </nav>

            <div className='searchBarDiv'>
                
                <form>
                    <input type="text" placeholder='Søg'/>
                </form>

                <div className='searchButton'>
                    <p>Søg</p>
                </div>

            </div>

        </div>
    )

}

export default NavigationComponent