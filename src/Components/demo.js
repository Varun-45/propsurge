import React from 'react'
import "./demo.css"

import { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import listingservice from '../services/list.services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";
import add from "../Images/map-pin.svg"


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
    const [search, setSearch] = useState("")
    // useEffect(() => {
    //     // getList();
    //     // if (Value.length > 0) {


    //     //     // let searchQuery = Value.toLowerCase();
    //     //     // for (const key in List) {
    //     //     //     let nam = List[key].name.toLowerCase();
    //     //     //     if (nam.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
    //     //     //         setResult(prevResult => {
    //     //     //             return [...prevResult, List[key].name]
    //     //     //         })
    //     //     //     }
    //     //     // }
    //     // }


    // }, [])
    // const getList = async () => {
    //     const data = await listingservice.getAlllistings();
    //     console.log(data.docs)
    //     data.docs.reverse();
    //     setList(data.docs.map((doc) => ({
    //         ...doc.data(), id: doc.id
    //     })))
    //     setLocality(data.docs.map((doc) => ({
    //         ...doc.data()
    //     })))



    // }

    // console.log(name)
    // console.log("hi")
    // console.log(List[1].name.includes("ss"));
    // let uniqueLoc = [...new Set(locality)]
    // useEffect(() => {


    // }, [Value])
    // List.map((doc, index) => {
    //     if (doc[index].name.includes("ss")) {
    //         console.log(true);
    //     }
    //     else {
    //         console.log(false)
    //     }
    // })
    useEffect(() => {
        onValue(ref(db), snapshot => {
            setList([])
            const data = snapshot.val();
            console.log("hi", data)
            if (data !== null) {
                Object.values(data).map((name) => {
                    console.log("hi", name.listname)
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
    // useEffect(() => {
    //     if (value.length > 0) {
    //         fetch('https://fb-cru-default-rtdb.firebaseio.com/2d9422802e4.json').then(
    //             response => response.json()
    //         ).then(responseData => {
    //             setResult([])
    //             let searchQuery = value;
    //             for (const key in responseData) {
    //                 let name = responseData[key].listname;
    //                 if (name.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
    //                     setResult((prevResult) => {
    //                         return [...prevResult, responseData[key].name]
    //                     })
    //                 }
    //             }

    //         }).catch(error => {
    //             console.log(error)
    //         })

    //     }
    //     else {
    //         setResult([]);
    //     }
    // }, [value])

    return (

        <>
            <div className="light-theme">


                <div className=" d-flex align-items-center">

                    <div className="banner-left ">

                        <h1 style={{ marginTop: "3.8rem", marginLeft: "2rem" }}>Property&nbsp;S<span style={{}}>u</span>rge</h1>
                        <div className="inner-desc">

                            <p style={{ marginLeft: "2rem" }}>We care for your deams. </p>

                            <div className="form-group d-flex flex-wrap align-items-center">
                                <input type="text" className="form-control " id="exampleInputtext1"
                                    placeholder="Enter location or property name" onChange={(e) => setValue(e.target.value)} value={value} />
                                <button className="black-btn" onClick={handleScroll}>Search</button>

                            </div>



                        </div>
                        <div class=" align-items-center">

                            <h2 style={{ textAlign: "center", marginTop: "1rem" }}><b>Just a click away</b></h2>
                            <button className='black-btn align-items-center center' style={{ marginTop: "1rem", width: "35%" }} >Get a Call</button>

                        </div>
                    </div>


                    {/* <div className="banner-right d-flex">

                        <div className="family">

                            <div className="banner-right-inner">
                                <h2>1k+</h2>
                                <span>satisfied <br /> family</span>

                            </div>
                            <div className="banner-right-inner" >
                                <h2>1k+</h2>
                                <span>satisfied <br /> family</span>

                            </div>

                        </div>
                        <div className="sale">

                            <div className="banner-right-inner">
                                <h2>{List.length}+</h2>
                                <span>Available <br /> Unit for Sale</span>

                            </div>
                            <div className="banner-right-inner">
                                <h2>{List.length}+</h2>
                                <span>Available <br /> Unit for Sale</span>

                            </div>

                        </div>
                    </div> */}
                </div>



                <div ref={props} id="scrollth"> <div class="container">
                    <div class="cards">
                        {
                            List.map((doc, index) => {
                                if (doc.listname.toUpperCase().includes(value.toUpperCase()) || doc.Locality.toUpperCase().includes(value.toUpperCase())) {


                                    return (

                                        <section class="card">
                                            <figure>
                                                <div class="img-overlay hot-home">
                                                    <img src={doc.Image1} alt="Trulli" />
                                                    <div class="overlay"><a href={"/page/" + doc.listname} style={{ color: "white" }}>view property</a></div>

                                                </div>
                                                <figcaption>{doc.listname}</figcaption>
                                            </figure>
                                            <div class="card-content">
                                                <div style={{ display: "flex", flexDirection: "row", narginRight: "0.5rem" }}><img src={add} style={{ width: "1rem", height: "1rem" }} />{doc.adress}</div>

                                                <section class="icons-home">
                                                    <div class="name-icon">
                                                        <span>bedrooms</span>
                                                        <div class="icon">
                                                            <i class="fas fa-bed"></i>
                                                            <span>3</span>
                                                        </div>
                                                    </div>
                                                    <div class="name-icon">
                                                        <span>bathrooms</span>
                                                        <div class="icon">
                                                            <i class="fas fa-sink"></i>
                                                            <span>3</span>
                                                        </div>
                                                    </div>
                                                    <div class="name-icon">
                                                        <span>area</span>
                                                        <div class="icon">
                                                            <i class="fas fa-vector-square"></i>
                                                            <span>4300</span>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section class="price">
                                                    <span>for sale</span>
                                                    <span>₹{doc.Pricing}</span>
                                                </section>
                                            </div>
                                        </section>





                                    )
                                }

                            })


                        }
                    </div>


                </div>

                </div>

            </div>

        </>
    )
}

export default Demo