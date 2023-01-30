import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
    const [menuClick, setMenuClick] = useState(false);
    const [menuButton, setMenuButton] = useState(false);
    const handleMenuClick = () => setMenuClick(!menuClick);
    const closeMobileMenu = () => setMenuClick(false);

    const showMenuButton = () => {
        if (window.innerWidth <= 960) {
            setMenuButton(true);
        } else {
            setMenuButton(false);
        }
    }

    useEffect (() => {
        showMenuButton()
    }, [])
    window.addEventListener('resize', showMenuButton);

    library.add(faBars, faXmark);

    return (
    <div className='navbar-wrapper'>
        <div className='navbar-logo'>
            <Link to="/">
                <img src='logo.png'/>
            </Link> 
        </div>
        <nav className={menuClick ? 'navbar active' : 'navbar'}>
            <ul className='navbar-items'>
                <li className='navbar-item' onClick={closeMobileMenu}><a href='#'>À la carte</a></li>
                <li className='navbar-item' onClick={closeMobileMenu}><a href='#'>Wijnkaart</a></li>
                <li className='navbar-item' onClick={closeMobileMenu}><a href='#'>Lunchmenu</a></li>
                <li className='navbar-item' onClick={closeMobileMenu}><a href='#'>Contact</a></li>
            </ul>
            <div className='navbar-phone'>
                <img src='phone.svg' />
                <Link to="tel:+3292825725" className='navbar-phone-number'>+32 9 282 57 25</Link> 
            </div>
        
        </nav>
        {menuButton && 
        <div className="navbar-icon" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={menuClick ? faXmark : faBars}/>
        </div>}
    </div>
    
    )
}

export default Navbar
