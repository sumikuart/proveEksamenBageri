
// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";


import './forsideslider.style.css'

// image import.

import slider1 from '../../../../assets/forside/slider/slide1.jpg'
import slider2 from '../../../../assets/forside/slider/slide2.jpg'
import slider3 from '../../../../assets/forside/slider/slide3.jpg'

import arrow from '../../../../assets/global/chevron.png'


const ForsideSliderComponent = () => {

    const [sliderPos, setSliderPos] = useState(1)

    const moveSliderRight = () => {
        if (sliderPos < 3) {
            setSliderPos(sliderPos+1)
        } 
    }

    const moveSliderLeft = () => {
        if (sliderPos > 1) {
            setSliderPos(sliderPos-1)
        } 
    }

    const setSlidePos1 = () => {
        setSliderPos(1)
    }

    const setSlidePos2 = () => {
        setSliderPos(2)
    }

    const setSlidePos3 = () => {
        setSliderPos(3)
    }

    return (
        <div className='forsideSliderStyle'>


            <div className='imgShowDiv'>

                <div className={'imgHolderDiv pos' + sliderPos}>
                    <img src={slider1} alt=""/>
                    <img src={slider2} alt=""/>
                    <img src={slider3} alt=""/>
                </div>

            </div>
            

            <div className='slideLeft' onClick={moveSliderLeft}>
                <img src={arrow} alt=""/>
            </div>


            <div className='slideRight' onClick={moveSliderRight}>
                <img src={arrow} alt=""/>
            </div>

            <div className='dotContainer'>
                <div className={'dot1 pos' + sliderPos} onClick={setSlidePos1}></div>
                <div className={'dot2 pos' + sliderPos} onClick={setSlidePos2}></div>
                <div className={'dot3 pos' + sliderPos} onClick={setSlidePos3}></div>
            </div>

            <div className='sliderText'>
                <p>Vi elsker at lave brød</p>
            </div>

        </div>
    )

}

export default ForsideSliderComponent