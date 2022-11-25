import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
const handleScroll = () => {
    document.getElementById("scrollth").scrollIntoView({
        behavior: 'smooth'
    })
}
const Navbar = () => {
    return (
        <>
            <div className="navbar" >
                <div className="navbar-container container2">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="/">Home</a></li>
                        <li><a onClick={handleScroll} style={{ cursor: "pointer" }} className="cl">Get a call</a></li>
                        <li><a href="/about">About us</a></li>
                    </ul>

                    <div className='logo' ><a href="/"><img src={logo} className='logo2' /></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar