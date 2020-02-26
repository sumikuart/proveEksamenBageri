// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";

// CSS:
import './navigation.style.css'




const NavigationComponent = () => {

    let history = useHistory()

    const [loginBoxStatus, setLoginBoxStatus] = useState('hide')

    const [currentNavUrl, setCurrentNavUrl] = useState('')
    const [backgroundStyleType, setBackgroundStyleType] = useState('NavigationBackdropOff')

    const [searchValue, setSearchValue] = useState('')

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
     
     const openLoginBox = (e) => {
         if(loginBoxStatus == 'hide') {
            setLoginBoxStatus('show')
         } else {
            setLoginBoxStatus('hide')
         }
     }


     const searchWordOnChange = (e) => {
        setSearchValue(e.target.value)
     }

     const startSearchFunction = (e) => {
        if(searchValue != '') {
            history.push('/search/' + searchValue)

            setSearchValue('')
        }
     }

    return(
        <div className={'navStyle ' + backgroundStyleType}>

            <nav>
                <ul>
                    <li><NavLink to='/' className='normalNav'>FORSIDE</NavLink></li>
                    <li><NavLink to='/produkter/5' className='normalNav'>PRODUKTER</NavLink></li>

                    <li><NavLink to='/' className='logoNav'>bageriet</NavLink></li>
                    
                    <li><NavLink to='/kontakt' className='normalNav'>KONTAKT</NavLink></li>

                    <li className='loginMasterLi'><p className='normalNav' onClick={openLoginBox}>LOGIN</p>

                            <div className={'loginBox '+loginBoxStatus}>
                                <form>
                                    <input type="text" placeholder='navn....'/>
                                    <input type="password" placeholder='kodeord...'/>
                                </form>

                                <div className='loginKnapMaster'>
                                    <div><p>login</p></div>

                                    <p>/</p>

                                    <div><NavLink to='/nybruger'>Nybruger</NavLink></div>
                               
                                </div>

                            </div>

                    </li>
                </ul>
            </nav>

            <div className='searchBarDiv'>
                
                <form>
                    <input type="text" placeholder='Søg' value={searchValue} onChange={searchWordOnChange}/>
                </form>

                <div className='searchButton' onClick={startSearchFunction}>
                    <p>Søg</p>
                </div>

            </div>

        </div>
    )

}

export default NavigationComponent