import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import listingservice from '../services/list.services';
import "./home.css"
const Home = () => {
    const [List, setList] = useState([]);
    const [locality, setLocality] = useState([]);
    const [name, setName] = useState([])
    useEffect(() => {
        getList();
    }, [])
    const getList = async () => {
        const data = await listingservice.getAlllistings();
        console.log(data.docs)
        data.docs.reverse();
        setList(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))
        setLocality(data.docs.map((doc) => ({
            ...doc.data(), locality: doc.Locality
        })))
        // setName(data.docs.map((doc) => ({
        //     ...doc.data(), names: doc.name
        // })))
        List.map((doc) => {

        })
        // setLocality(data().Locality)
    }
    // useEffect(() => {
    //     getLocality();
    // }, [])
    // const getLocality = async () => {
    //     const data1 = await listingservice.getAlllistings();
    //     console.log(data1.docs)
    //     data1.docs.reverse();
    //     setLocality(data1.docs.map((doc) => ({
    //         ...doc.data1(), id: doc.id
    //     })))
    // }
    console.log(name)
    console.log("hi")
    console.log(locality);
    let uniqueLoc = [...new Set(locality)]

    return (
        <>

            <Navbar />
            <div ><input type="text" style={{ marginTop: "5rem", }} /></div>
            <div style={{ marginTop: "5rem" }}></div>
            {/* {
                uniqueLoc.map((doc, index) => {
                    return (
                        <h1>{doc.Locality}</h1>
                    )
                }
                )}
            {
                List.filter(j => j.Locality.includes("ssssssss")).map(filter => {
                    return (
                        <h1>{filter} </h1>
                    )
                })
            } */}
            {
                List.map((doc, index) => {
                    return (
                        <h1>{doc.Config} </h1>
                    )
                })
            }
        </>
    )
}

export default Home