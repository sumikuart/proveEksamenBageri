// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink} from "react-router-dom";


import './mainForside.style.css'


// Components
import ForsideSliderComponent from './frontpageSlideComponents/forsideSlider.component';
import AboutFrontPageComponent from './frontpageAboutComponent/frontpageAbout.component';
import NyhedsbrevForsideComponent from './frontpageNyhedsbrev/forsideNyhedsbrev.component';
import ProdukterForsideComponent from './frontpageProdukter/forsideProdukter.component';





const MainForsideComponent = () => {


    return (
        <div className='mainForsideStyle'>


                    <ForsideSliderComponent />
                    <AboutFrontPageComponent />
                    <NyhedsbrevForsideComponent/>
                    <ProdukterForsideComponent />

                    
           

        </div>
    )

}

export default MainForsideComponent