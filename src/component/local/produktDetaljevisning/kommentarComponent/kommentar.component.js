

// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

import './kommentar.style.css'

import profileImg from '../../../../assets/global/profileimg.png'


const KommentarPoster = (props) => {

    const deleteKommentar = () => {

        axios.delete('http://localhost:4464/delete/comment/' + props.currentComment._id)
            .then( res => console.log(res.data))
            
    }

    const deleteoptionChecker = (e) => {

        if (props.currentComment.forfatter == localStorage.getItem('logedUserName')) {
            return( 
                <div className="forfatterOgOptionsDiv">

                    <div className='kommentarForfatter'>
                        <p>{props.currentComment.forfatter}</p>
                    </div>
                    

                    <div className="deleteKommetarOption" onClick={deleteKommentar}>
                        <p>Delete</p>
                    </div>
                </div>
            )

        } else {
            return( 
                <div className='kommentarForfatter'>
                    <p>{props.currentComment.forfatter}</p>
                </div>
            )
        }
    }

    return(

        <div>

            <div className="kommentarItem">
                <div className='profilBilledeDiv'>
                    <img src={profileImg} alt=""/>
                </div>
                <div className='kommentarItemContent'>
                    {deleteoptionChecker()}
                    <div className='kommentarMainContent'>
                    <p>{props.currentComment.kommentar}</p>
                    </div>
                </div>
            </div>
        </div>

)

}

const KommentarComponent = (props) => {


    const  [loadingComments, setLoadingComments] = useState('Loading')


    // Dette er id'et fra produktet. brug det til at linke kommentar til produkter
    const [kommentarSelector, setKommentarSelector] = useState(props.selectedProdukt)


    const [onlineUser, setOnlineUser] = useState('')
    const [kommentarIndhold, setKommentarIndhold]= useState('')
    const [kommentarList, setKommentarList]= useState('')


    const [kommentLength, setKommentLength] = useState('')
    const [kommentPrevLength, setKommentPrevLength] = useState('')

    useEffect(() => {
        setOnlineUser(localStorage.getItem('logedUserName'))
        
        axios.get('http://localhost:4464/get/kommentar/' + kommentarSelector)
        .then(response => {
            setKommentarList(response.data)
            setKommentLength(kommentarList.length)
        })

        


        setLoadingComments('done')

    }, [])

    useEffect(() => {

        if( kommentLength != kommentPrevLength) {

            axios.get('http://localhost:4464/get/kommentar/' + kommentarSelector)
            .then(response => {
                setKommentarList(response.data)
            })

            setKommentPrevLength(kommentLength)
        }       


    })


    const addCommentFunction = (e) => {
            
    const addComment = {
        forfatter: onlineUser,
        produkt_id:kommentarSelector,
        kommentar:kommentarIndhold
    }

    axios.post('http://localhost:4464/add/kommentar', addComment)
    .then(res => console.log(res.data))

    setKommentLength(kommentarList+1)


    }

    const handleNewComment = (e) => {
        setKommentarIndhold(e.target.value)
    }

    console.log(onlineUser)

    const userFunctionAddComment = () => {

        if (onlineUser == '') {
            return (
                <div></div>
            )
        } else {
            return (

                <div className='kommentarInput'>

                    <div className='kommentarFlexer'>

                        <div className='kommentarIconDiv'>
                            <p>	&#x270E;</p>
                        </div>

                        <form>
                            <input type="text" placeholder='fortæl os hvad du synes.....'  value={kommentarIndhold} onChange={handleNewComment}/>
                        </form>
                    </div>

                    <div className='tilføjKommentarKnap' onClick={addCommentFunction}>
                        <p>indsæt</p>
                    </div>
                </div>
            )
        }
    }

    const commentPostHandler = (e) => {
        if (kommentarList.length == 0){
            return(
                <div>
                    <p>ingen er skrevet, vær den første</p>
                </div>
            )
        } else {
            return kommentarList.map(function (currentComment, i) {
                return <KommentarPoster currentComment={currentComment} Key={i} />
            })
        }
    }


    if(loadingComments == 'Loading') {
        return (
            <div className='kommentarStyle'>
                <p>loading</p>
            </div>
        )
    } else {

        console.log(kommentarList)

        return (
            <div className='kommentarStyle'>
    
                <div className='kommentarStart'>
                    <p>KOMMENTAR</p>
                </div>
    
                {userFunctionAddComment()}
    
                <div className='kommentarHolder'>
                    {commentPostHandler()}
                </div>
    
            </div>
        )
    

    }

}

export default KommentarComponent