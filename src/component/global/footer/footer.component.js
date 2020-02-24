// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";


// Style
import './footer.style.css'



const FooterComponent = () => {

    const handleFooterToTop = (e) => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='footerStyle'>

        <div className='topButton' onClick={handleFooterToTop}>
            <img src={require('../../../assets/global/chevron.png')} alt="to the top arrow" />
        </div>
            

            <div className='topFooter'>



                <div>
                    <NavLink to='/' className='footerLogo'>bageriet</NavLink>
                </div>
    
                <p className='footerText'>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer.
                </p>
            </div>

            
            <div className='lowFooter'>
                <div className='lowContent'>
                    <p>Copyright © 2017 bageriet aps</p>
                </div>
            </div>
        </div>
    )

}

export default FooterComponent