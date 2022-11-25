import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import logorm from '../Images/logo.png'
const Footer = () => {
    return (




        <footer>

            <div className="top_header">

                <h2>Property&nbsp;Surge</h2>

                {/* <img src={logorm} className="logo2" /> */}

                <section>
                    <a href='https://www.google.com/maps/search/A%2F204,+Mahesh+Commercial+Complex,+Plot+No.+37,+Sector-15,+CBD+Belapur,+Navi+Mumbai+-+400614/@19.0101286,73.0299669,15.96z'>
                        <span><FontAwesomeIcon icon={faLocationDot} className="fa"></FontAwesomeIcon></span></a>
                    <span> A/204, Mahesh Commercial Complex, Plot No. 37, Sector-15, CBD Belapur, Navi Mumbai - 400614  </span>
                </section>
                <section>
                    <a href="tel:8879298904">
                        <span><FontAwesomeIcon icon={faPhone} className="fa"></FontAwesomeIcon></span></a>
                    <span>8879298904</span>
                </section>
                <section>
                    <a href="mailto:enquiry@propertysurge.in">
                        <span><FontAwesomeIcon icon={faEnvelope} className="fa"></FontAwesomeIcon></span></a>
                    <span>enquiry@propertysurge.in</span>
                </section>
            </div>
            <span className="border-shape"></span>
            <div className="bottom_content">
                <section >
                    <a href="https://www.instagram.com/Propertysurge.in/"><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram icons"></FontAwesomeIcon></a>
                    <a href="https://www.facebook.com/Propertysurge.in"><FontAwesomeIcon icon={faFacebook} className="fa fa-instagram icons"></FontAwesomeIcon></a>
                    <a href="mailto:enquiry@propertysurge.in"><FontAwesomeIcon icon={faEnvelope} className="fa fa-instagram icons"></FontAwesomeIcon></a>
                </section>
                <section style={{ textDecoration: "none" }}>
                    <a href="/">Home</a>
                    <a href="/about">About us</a>


                </section>
            </div>
            <div className="copyright">
                Copyright © 2022 Property Surge - All rights reserved
            </div>
        </footer>
    )
}

export default Footer