import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";
import "./prop.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit'
import { FaLocationArrow } from 'react-icons/fa';
// import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import adress from "../Images/map-pin.svg"
import whatsapp from "../Images/WhatsApp.svg.webp"
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import add from "../Images/map-pin.svg"
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { display } from '@mui/system';


// import { set, ref, onValue, remove, update } from "firebase/database";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Propdetails = () => {


    const str = "19,72"

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyDs3Tskv75ZHcwP-Lq6fRoZVgXA4ylLB2E" })

    const imgs = document.querySelectorAll('.img-select a');
    const [dis, setdis] = useState(0);
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });


    useEffect(() => {

    })
    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let { id } = useParams();

    const [property, setproperty] = useState([])
    useEffect(() => {
        onValue(ref(db), snapshot => {
            setproperty([])
            const data = snapshot.val();

            if (data !== null) {
                Object.values(data).map((name) => {

                    if (name.listname !== undefined) {
                        setproperty(oldArray => [...oldArray, name])
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

    const [custname, setcustname] = useState("");
    const [phno, setphno] = useState("");
    const [sub, setsub] = useState("");
    const [clk, setclk] = useState(false);
    const [msg, setmsg] = useState("");


    const writeToDatabase = () => {
        if (custname == "" || phno === "" || sub === "") {
            setmsg({
                error: true,
                msg: "Kindly fill  all the fields"
            });

        }
        else {

            const uuid = uid();
            set(ref(db, `/${"enq" + uuid}`), {
                custname,
                phno,
                sub,
                uuid

            });
            setcustname("");
            setphno("");
            setsub("");
            setmsg({
                error: false,
                msg: "Thanks,our team will reach to you shortly"
            });

        }
        setclk(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setclk(false);
    };


    return (
        <div className='cr'>


            {
                property.map((doc, index) => {
                    const link = "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=" + "Borivali" + "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

                    if (doc.listname.toUpperCase() == id.toUpperCase()) {


                        const lat = doc.Lat;
                        const lon = doc.Lon;

                        const name = doc.listname;

                        const amm = doc.amminities.split(",");


                        return (

                            <div>                     <div class="card-wrapper" >
                                <div class="car">

                                    <div class="product-imgs ">


                                        {/* <Carousel autoPlay interval="5000" transitionTime="500" style={{ height: "10%" }}>
                                            <div>
                                                <img src="https://media.istockphoto.com/photos/small-house-picture-id174860264?k=20&m=174860264&s=612x612&w=0&h=dbVoC1nixexPUL84RQ5QQal5RPevY_W1Y6AeXQ2XCWY=" width="600" height="500" className="imgprod" />

                                            </div>
                                            <div>
                                                <img src="https://picsum.photos/700/400?img=2" className="imgprod" width="600" height="500" />

                                            </div>

                                        </Carousel> */}
                                        <div class="img-display">
                                            <div class="img-showcase">
                                                <img src={doc.Image1} alt="Buiding Image" width="500" height="500" />
                                                <img src={doc.Image2} alt="Buiding Image" width="500" height="500" />
                                                <img src={doc.Image3} alt="Buiding Image" width="500" height="500" />
                                                <img src={doc.Image4} alt="Buiding Image" width="500" height="500" />

                                            </div>
                                        </div>
                                        <div class="img-select">
                                            <div class="img-item">
                                                <a href="#" data-id="1">
                                                    <img src={doc.Image1} alt="Buiding Image" width="100" height="100" />
                                                </a>
                                            </div>
                                            <div class="img-item">
                                                <a href="#" data-id="2">
                                                    <img src={doc.Image2} alt="Buiding Image" width="100" height="100" />
                                                </a>
                                            </div>
                                            <div class="img-item">
                                                <a href="#" data-id="3">
                                                    <img src={doc.Image3} alt="Buiding Image" width="100" height="100" />
                                                </a>
                                            </div>
                                            <div class="img-item">
                                                <a href="#" data-id="4">
                                                    <img src={doc.Image4} alt="Buiding Image" width="100" height="100" />
                                                </a>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="product-content">
                                        <h2 class="product-title">{doc.listname}</h2>



                                        <div class="product-price">

                                            <p class="new-price"> Price: <span>{doc.Pricing}₹</span></p>
                                            <div> {doc.status} </div>
                                        </div>

                                        <div class="product-detail">

                                            <p>{doc.Description}</p>



                                            <li className='li1'>Address :<span>{doc.adress}</span></li>
                                            <li className='li2'>{doc.Config}</li>
                                            <li className='li3'>Carpet area :<span>{doc.carpArea}</span></li>
                                            <li className='li4'>Total floors:<span>{doc.floorCount}</span></li>
                                            <ul className='ul1'><b>Amenities:</b>

                                                <div class="frame" >

                                                    {/* <button class="custom-btn btn-5" style={{}}><span>Swimming pool</span></button> */}
                                                    {

                                                        amm.map((doc, index) => {



                                                            return (

                                                                <button class="custom-btn btn-5" style={{}}><span>{doc}</span></button>

                                                            )

                                                        })
                                                    }





                                                </div>

                                            </ul>

                                        </div>

                                        <div class="purchase-info">


                                            <button type="button" class="btn" onClick={handleScroll}>Enquire</button>
                                        </div>

                                        <div class="mapouter">
                                            <div class="gmap_canvas">
                                                <iframe id="iframeId" height="400px" width="100%" src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es; &output=embed`}></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>




                                <div className='crd' > <h3 style={{ marginLeft: "22px", textAlign: "center" }}>Similar Properties</h3> <div class="horizontal-scroll " style={{ maginBottom: "4rem" }}>
                                    {

                                        property.map((d, index) => {
                                            if ((((d.Locality.toUpperCase().includes(doc.Locality.toUpperCase())) || d.Config.includes(doc.Config) || ((d.Pricing >= 0.75 * doc.Pricing) || (d.Pricing <= 0.75 * doc.Pricing))) && (d.listname !== doc.listname))) {
                                                return (

                                                    <div class="horizontal-scroll__item" style={{ backgroundImage: `url("${d.Image1}")` }}  ><div className='bg'> <a href={"/page/" + d.listname} className='lin'><h3 className="titl">{d.listname}</h3>  <p className='titlp'>₹{d.Pricing}</p>
                                                        <p className='titlp'><FontAwesomeIcon icon={faLocationDot} className="fa" style={{ marginRight: "5px" }}></FontAwesomeIcon>{d.adress}</p></a>

                                                    </div>
                                                    </div>



                                                )

                                            }
                                            else {
                                                if ((d.featured == "y") && (d.listname != doc.listname)) {
                                                    return (

                                                        <div class="horizontal-scroll__item" style={{ backgroundImage: `url("${d.Image1}")` }}  ><div className='bg'> <a href={"/page/" + d.listname} className='lin'><h3 className="titl">{d.listname}</h3>  <p className='titlp'>₹{d.Pricing}</p>
                                                            <p className='titlp'><FontAwesomeIcon icon={faLocationDot} className="fa" style={{ marginRight: "5px" }}></FontAwesomeIcon>{d.adress}</p></a>

                                                        </div>
                                                        </div>



                                                    )

                                                }

                                            }

                                        })
                                    }
                                </div>
                                </div>
                                <a href={"https://wa.me/918879298904/?text=Hello, I am interested in " + name + " can you share some extra details with me."} data-action="share/whatsapp/share" class="whatsapp-button"><img src={whatsapp} /></a></div>



                        )
                    }
                    // <div class="mapouter">
                    //     <div class="gmap_canvas">
                    //         <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q= Borivali &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                    //     </div>
                    // </div>
                })


            }
            {/* <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} style={{ width: "100vw", height: "100vh" }}></GoogleMap> */}
            <div id='scrollth'>
                <div class="containerC">
                    <div class="content">

                        <div class="right-side">
                            <div class="topic-text" style={{ color: "#f64749" }}><b>Get a call</b></div>
                            <p>Interested in any property or have any doubt just dial to us we are only a click away...</p>
                            <form action="#">
                                <div class="input-box">
                                    <input type="text" placeholder="Enter your name" onChange={(e) => setcustname(e.target.value)} value={custname} />
                                </div>
                                <div class="input-box">
                                    <input type="text" placeholder="Enter your Contact number" onChange={(e) => setphno(e.target.value)} value={phno} />
                                </div>
                                <div class="input-box message-box">
                                    <textarea placeholder="Enter your message" onChange={(e) => setsub(e.target.value)} value={sub}></textarea>
                                </div>
                                <div class="button" >
                                    <input type="button" value="Send Now" onClick={writeToDatabase} style={{ backgroundColor: "#f64749" }} />
                                </div>
                                {
                                    msg?.msg && (
                                        <Snackbar open={clk} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity={msg?.error ? "error" : "success"} sx={{ width: '100%' }}>
                                                {msg?.msg}
                                            </Alert>
                                        </Snackbar>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div >
            </div>



            {/* {"whatsapp://send?text=" + encodeURIComponent(window.location.href)} */}
        </div >

    )
}

export default Propdetails