// Main:
import React, { useContext } from 'react';
import { NavLink, BrowserRouter as Router, Route} from "react-router-dom";


import './mainForside.style.css'


// Components
import ForsideSliderComponent from './frontpageSlideComponents/forsideSlider.component';
import AboutFrontPageComponent from './frontpageAboutComponent/frontpageAbout.component';
import NyhedsbrevForsideComponent from './frontpageNyhedsbrev/forsideNyhedsbrev.component';
import ProdukterForsideComponent from './frontpageProdukter/forsideProdukter.component';


const MainForsideComponent = () => {

    return (
        <div className='mainForsideStyle'>

            <Router>
                <Route exact path="/" component={ForsideSliderComponent} />
                <Route exact path="/" component={AboutFrontPageComponent} />
                <Route exact path="/" component={NyhedsbrevForsideComponent} />
                <Route exact path="/" component={ProdukterForsideComponent} />
            </Router>

        </div>
    )

}

export default MainForsideComponent