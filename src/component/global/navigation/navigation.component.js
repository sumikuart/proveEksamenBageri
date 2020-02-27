// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";

import axios from 'axios'

// CSS:
import './navigation.style.css'




const NavigationComponent = () => {

    let history = useHistory()

    const [loginBoxStatus, setLoginBoxStatus] = useState('hide')

    const [currentNavUrl, setCurrentNavUrl] = useState('')
    const [backgroundStyleType, setBackgroundStyleType] = useState('NavigationBackdropOff')

    const [searchValue, setSearchValue] = useState('')

    // login data:
    const [userList, setUserList] = useState('')
    const [userLoginName, setUserLoginName] = useState('')
    const [userLoginWord, setUserLoginWord] = useState('')

    // userContainer

    const [onlineUser, setOnlineUser] = useState ('')

    useEffect(()=>{ 
        setCurrentNavUrl(history.location.pathname)

        axios.get('http://localhost:4464/get/user')
        .then(response =>{
            setUserList(response.data)
        }).catch(function(error) {
            console.log('an Error has accurd in get from componentDidMount in todoList component')
        })
        
        setOnlineUser(localStorage.getItem('logedUserName'))
    },[])

    
    useEffect(()=>{ 

        setCurrentNavUrl(history.location.pathname)

        if (currentNavUrl === '/') {
            setBackgroundStyleType('NavigationBackdropOff')
        } else {
            setBackgroundStyleType('NavigationBackdropOn')
        }
     })


     const handleLoginName = (e) => {
        setUserLoginName(e.target.value)
     }
     
     const handleLoginWord = (e) => {
        setUserLoginWord(e.target.value)
     }
     

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

    const loginFunction = (e) =>{

        console.log(userList[0].navn)        
        console.log(userLoginName)
        console.log(userLoginWord)

        for (var i = 0; i < userList.length; i++) {

            if(userList[i].navn == userLoginName){
                if (userLoginWord == userList[i].password) {

                    console.log('du er logget ind')

                    localStorage.setItem('logedUserName', userLoginName);
                    setOnlineUser(userLoginName)

                    setUserLoginName('')
                    setUserLoginWord('')

                    
                }
            }
        }

        
    }  

    const handleLogout = () => {
        localStorage.setItem('logedUserName', '');
        setOnlineUser('')
    }

    const loginPart = () => {

        if (onlineUser == '') {

            return (

                <div>
                    <p className='normalNav' onClick={openLoginBox}>LOGIN</p>
    
    
                    <div className={'loginBox ' + loginBoxStatus}>
                        <form>
                            <input type="text" placeholder='navn....' value={userLoginName} onChange={handleLoginName} />
                            <input type="password" placeholder='kodeord...' value={userLoginWord} onChange={handleLoginWord} />
                        </form>
    
                        <div className='loginKnapMaster'>
                            <div onClick={loginFunction}><p>login</p></div>
    
                            <p>/</p>
    
                            <div><NavLink to='/nybruger'>Nybruger</NavLink></div>
    
                        </div>
                    </div>
                </div>
            )

        } else {
            return(
                  <div>
                    <p className='normalNav' onClick={handleLogout}>{'LOGOUT - ' + onlineUser}</p>
                    </div>
            )

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

                    <li className='loginMasterLi'>

                    {loginPart()}

                    </li>
                </ul>
            </nav>

            <div className='searchBarDiv'>
                
                <form onSubmit={startSearchFunction}>
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