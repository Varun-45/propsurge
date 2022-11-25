import React, { useState, useEffect } from 'react'
import "./contact.css"
import { db } from "../firebase"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Contact = () => {
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
        <div class="containerC">
            <div class="content">

                <div class="right-side">
                    <div class="topic-text">Get a call</div>
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
                        <div class="button">
                            <input type="button" value="Send Now" onClick={writeToDatabase} />
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
    )
}

export default Contact