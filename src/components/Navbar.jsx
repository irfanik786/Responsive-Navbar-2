import React, { useState } from 'react'
import './Navbar.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
        <nav className='main-nav'>

            <div className="logo">
                <h2>
                    <span>I</span>rfan
                    <span>K</span>han
                </h2>
            </div>

            <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>

            <div className="social-media">
                <ul className='social-media-desktop'>
                    <li><a href="#" target='ik'> <FaFacebookSquare className='facebook'/> </a></li>
                    <li><a href="#" target='ik'> <FaInstagramSquare className='instagram'/> </a></li>
                    <li><a href="#" target='ik'> <FaYoutubeSquare className='youtube'/> </a></li>
                </ul>
                
                <div className='hamburger-menu'>
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
                </div>
            </div>
        </nav>

        <section className='hero-section'>
            <p>Welcome to</p>
            <h1>Irfan Khan</h1>
        </section>
    </>
  )
}

export default Navbar