
// Main:
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'


import './frontpageAbout.style.css'

// import img: 
import newsImg0 from '../../../../assets/forside/articler/article.jpg'
import newsImg1 from '../../../../assets/forside/articler/article2.jpg'
import newsImg2 from '../../../../assets/forside/articler/article3.jpg'

const  NewsPoster = (props) => { 

if (props.Key == 0) {
  return (
    <div className='newsItemHolder'>
      <div>
        <img src={newsImg0} alt=""/>
      </div>

      <div className='newsItemHolderTitle'>
        <p>{props.currentNews[1].title}</p>
      </div>

      <div className='newsItemHolderBeskrivelse'>
        <p>{props.currentNews[1].teaser}</p>
      </div>

    </div>
  )
}


if (props.Key == 1) {
  return (
    <div className='newsItemHolder'>
      <div>
        <img src={newsImg1} alt=""/>
      </div>

      <div className='newsItemHolderTitle'>
        <p>{props.currentNews[1].title}</p>
      </div>

      <div className='newsItemHolderBeskrivelse'>
        <p>{props.currentNews[1].teaser}</p>
      </div>

    </div>
  )
}

if (props.Key == 2) {
  return (
    <div className='newsItemHolder'>
      <div>
        <img src={newsImg2} alt=""/>
      </div>

      <div className='newsItemHolderTitle'>
        <p>{props.currentNews[1].title}</p>
      </div>

      <div className='newsItemHolderBeskrivelse'>
        <p>{props.currentNews[1].teaser}</p>
      </div>
      
    </div>
  )
}
}


const AboutFrontPageComponent = () => {

  const [news, setNews] = useState('')
  const [loadingNews, setLoadingNews] = useState('loading')

  useEffect(()=>{ 
    axios.get('https://heka4.apache.techcollege.dk/api/news/')
    .then(response => {
      setNews(response.data)
    })
    setLoadingNews('done')
},[])


if (loadingNews === 'loading') {
  return (
    <div>
      <p>Loading</p>
    </div>
  )
} else {

  const newsMapper = (e) => {
    return Object.entries(news).reverse().map(function (currentNews, i) {

        if (i < 3) {
            return <NewsPoster currentNews={currentNews} Key={i} />
        }
        
    })
}

    return (
        <div className='aboutStyle'>

        <p className='overskrift'> Vi skaber lækkert brød</p>

        <div className='underOverSkrift'>
          <p > Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        </div>

        <div className='forsideNyhedsDiv'>
        {newsMapper()}
        </div>

        </div>
    ) }

} 

export default AboutFrontPageComponent