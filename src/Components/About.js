import React from 'react'
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBadgeCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../Images/aboutgif.gif';
// import {lottieplayer} from "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
import Lottie from 'react-lottie';
import * as animationData from "../lottie.json"
import Contact from './Contact';
import Footer from './Footer';
const About = () => {

    return (
        <>
            <section className='sec'>
                {/* <div class="image">

                </div> */}

                <div>
                    <Lottie options={{
                        animationData: animationData
                    }} style={{ height: "20rem" }} />
                </div>

                {/* <div style={{ backgroundColor: "#fef7f0" } >
                <img src={Icon} style={{ width: "30%", height: "25rem", marginLeft: "35%" }} /> */}

                <div class="content" style={{ padding: "10px" }}>
                    <h1> <b>About </b><b style={{ color: "#f91942" }}>Us</b></h1>
                    <span></span>

                    <h6 >We help you choose from a basket of properties, within your budget, at No Additional Cost.</h6>

                    {/* <ul class="links">
                        <li><a href="#">work</a></li>

                        <div class="vertical-line"></div>

                        <li><a href="#">service</a></li>

                        <div class="vertical-line"></div>

                        <li><a href="#">contact</a></li>
                    </ul> */}


                </div>
                {/* <div className='content1'>
                    <ul class="icons" >
                        <li>
                            <FontAwesomeIcon icon={faTwitter} className="iconsl1"></ FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} className="iconsl"></ FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} className="iconsl"></ FontAwesomeIcon>
                        </li>

                    </ul></div> */}
            </section>
            <div  >
                <div style={{ marginTop: "1.2rem" }}>
                    <div className='crds'>
                        <div class="row">

                            <div class="col-lg-4 col-sm-6">
                                <div class="item"> <span class="icon feature_box_col_one"><FontAwesomeIcon icon={faCircleCheck} className='i' /></span>
                                    <h6>Verified Properties</h6>
                                    <p>We Deal with only trusted developers to provide you the best service and verified properties.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="item"> <span class="icon feature_box_col_two"><FontAwesomeIcon icon={faLocationDot} className='i' /></span>
                                    <h6>Presence</h6>
                                    <p>We currently operate in various localities of Mumbai and provide our best services there.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="item"> <span class="icon feature_box_col_three"><FontAwesomeIcon icon={faHeadset} className='i' /></span>
                                    <h6>24 x 7 User Support</h6>
                                    <p>If our customer has any problem and any query we are always happy to help then.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="item"> <span class="icon feature_box_col_four"><FontAwesomeIcon icon={faReply} className='i' /></span>
                                    <h6>Quick Responce</h6>
                                    <p>We will respond to your queries as soon as possible.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="item"> <span class="icon feature_box_col_five"><FontAwesomeIcon icon={faHandHoldingDollar} className='i' /></span>
                                    <h6>Best Price</h6>
                                    <p>We will bring your dream house to you in the best possible price.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="item"> <span class="icon feature_box_col_six"><FontAwesomeIcon icon={faCamera} className='i' /></span>
                                    <h6>Original Pictures</h6>
                                    <p>The Photos shown to you on the website are 100% original.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='scrollth'>
                <Contact /></div>
            <Footer />

        </>

    )
}

export default About