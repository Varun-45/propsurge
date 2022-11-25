import React from 'react'
import "./demo.css"

import { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import listingservice from '../services/list.services';

import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";
import add from "../Images/map-pin.svg"
import call from "../Images/call.png"
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBadgeCheck, faBuilding, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];



const Demo = () => {
    const props = useRef(null);
    const gotopropsection = () => window.scrollTo({
        to: props.current.offsetTop,
        behavior: 'smooth'

    })
    const [List, setList] = useState([]);
    const [locality, setLocality] = useState([]);
    const [name, setName] = useState([]);
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState("");
    const [click, setClick] = useState(false);

    useEffect(() => {
        onValue(ref(db), snapshot => {
            setList([])
            const data = snapshot.val();

            if (data !== null) {
                Object.values(data).map((name) => {

                    if (name.listname !== undefined) {
                        setList(oldArray => [...oldArray, name])
                    }

                })
            }

        });

    }, [])


    const handleScroll = () => {
        document.getElementById("scrollth").scrollIntoView({
            behavior: 'smooth'
        })
    }

    // number count for stats, using jQuery animate

    $('.counting').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

            {

                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum + "+");
                    //alert('finished');
                }

            });


    });
    $('.counting1').each(function () {
        var $this = $(this),
            countTo = List.length;

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

            {

                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum + "+");
                    //alert('finished');
                }

            });


    });






    return (

        <>

            <div className="light-theme">






                <div class="main">

                    <div class="info">
                        <div class="head">
                            <h2>Homes that <span style={{ color: "yellow" }}> Match</span></h2>
                        </div>
                        <div class="container1">
                            <div class="searchInput">
                                <input type="text" placeholder="Search with a keyword...
                                " onChange={(e) => setValue(e.target.value)} value={value} />

                                <div class="resultBox">
                                    {

                                        List.map((doc, index) => {
                                            if ((value != "") && (doc.listname.toUpperCase().includes(value.toUpperCase()) || doc.Locality.toUpperCase().includes(value.toUpperCase()) || doc.Config.includes(value))) {


                                                return (
                                                    <>
                                                        <a href={"/page/" + doc.listname} style={{ color: "Black", textDecoration: "none" }}>  <li>{doc.listname},{doc.Locality}  <span style={{ marginLeft: "2rem" }}> {doc.Config}bhk</span ></li></a>
                                                        <hr /></>
                                                )
                                            }
                                        })
                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="sectiontitle">
                    <h2>About us</h2>
                    <span class="headerLine"></span>
                </div>
                <div class="rowl">

                    <div class=" stats" >
                        <FontAwesomeIcon icon={faHelmetSafety} className="fa"></FontAwesomeIcon>
                        <div class="counting" data-count="30" id="cnt">0+</div>
                        <h5>Developers</h5>
                    </div>

                    <div class=" stats">
                        <FontAwesomeIcon icon={faPeopleGroup} className="fa"></FontAwesomeIcon>
                        <div class="counting" data-count="120">0</div>
                        <h5>Happy families</h5>
                    </div>

                    <div class=" stats">
                        <FontAwesomeIcon icon={faMapLocationDot} className="fa"></FontAwesomeIcon>
                        <div class="counting" data-count="10">0</div>
                        <h5>Localities</h5>
                    </div>

                    <div class=" stats">
                        <FontAwesomeIcon icon={faBuilding} className="fa"></FontAwesomeIcon>
                        <div class="counting1" data-count="10">0</div>
                        <h5>Properties Listed</h5>
                    </div>



                </div>






                <div class="sectiontitle">
                    <h2>Our Developers</h2>
                    <span class="headerLine"></span>
                </div>
                <div className="controls-wrapper"></div>

                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>
                        <Item><img src='https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2wtYW5kLXQtcmVhbHR5LmpwZw.png' /></Item>
                        <Item><img src='data:image/png;base64,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' /></Item>
                        <Item><img src='data:image/png;base64,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' /></Item>
                        <Item><img src='https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/106169.ranwal.png' /></Item>
                        <Item><img src='https://yt3.ggpht.com/ytc/AMLnZu8OWs-FUhGzBfB6K2RGMORWzPDEHBw-1_Ai1SKq=s900-c-k-c0x00ffffff-no-rj' /></Item>
                        <Item><img src='https://im.proptiger.com/3/100880/13/paradise-group-10674016.jpeg' /></Item>
                        <Item><img src='https://cms.propjunction.com/Developer/Developer_Logo/51/Thumb/51.webp' /></Item>
                        <Item><img src='https://preview.redd.it/gm4pkh2h5kh71.png?width=960&crop=smart&auto=webp&s=1d273113540a1974df4d9619682aa80128e57f2d' /></Item>

                    </Carousel>
                </div>





                <h2 style={{ textAlign: "center", marginTop: "10px" }}>Featured Properties</h2>
                <div ref={props} > <div class="container">
                    <div class="cards">

                        {
                            List.map((doc, index) => {
                                if (doc.featured === "y") {

                                    return (

                                        <section class="card">
                                            <a href={"/page/" + doc.listname} style={{ textDecoration: "none", color: "black" }}>
                                                <figure>
                                                    <div class="img-overlay hot-home">
                                                        <img src={doc.Image1} alt="Trulli" />


                                                    </div>

                                                    <figcaption> {doc.listname}</figcaption>
                                                    <h6 className='status'>{doc.status}</h6>
                                                </figure>
                                                <div class="card-content">
                                                    <div style={{ display: "flex", flexDirection: "row", narginRight: "0.5rem" }}><FontAwesomeIcon icon={faLocationDot} className="fa" style={{ marginTop: "0.2rem" }}></FontAwesomeIcon><div style={{ marginLeft: "1rem" }}><span>{doc.adress}</span></div></div>

                                                    <section class="icons-home">
                                                        <div class="name-icon">
                                                            <span>bedrooms</span>
                                                            <div class="icon">
                                                                <FontAwesomeIcon icon={faBed} className="fa" style={{ marginTop: "0.2rem", marginRight: "0.2rem" }}></FontAwesomeIcon>
                                                                <span>{doc.Config}BHK</span>
                                                            </div>
                                                        </div>
                                                        <div class="name-icon" style={{ marginRight: "1.2rem" }}>
                                                            <span>Carpet area</span>
                                                            <div class="icon">
                                                                <FontAwesomeIcon icon={faArrowsUpDownLeftRight} className="fa" style={{ marginTop: "0.2rem", marginRight: "0.2rem" }}></FontAwesomeIcon>
                                                                <span>{doc.carpArea}sq ft.</span>
                                                            </div>
                                                        </div>

                                                    </section>
                                                    <section class="price">
                                                        <span>Price</span>
                                                        <span>₹{doc.Pricing}</span>
                                                    </section>
                                                </div>
                                            </a>
                                        </section>





                                    )
                                }


                            })


                        }
                    </div>


                </div>

                </div>
                <div id='scrollth'>
                    <Contact /></div>
                <Footer />
            </div>
            <img src={call} class="whatsapp-button" onClick={handleScroll} />


        </>
    )
}

export default Demo