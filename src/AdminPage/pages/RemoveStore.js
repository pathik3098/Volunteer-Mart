/*
Author: Narendran Krishnakumar
Page Function: Removes the Store from the db
*/
import React, { useState, useEffect } from "react";
import '../css/AdminStyles.css';
import Axios from 'axios'
import { Redirect, Route, withRouter } from "react-router-dom";

function RemoveStore(props) {


    var isAdmin = localStorage.getItem('admin');
    console.log(isAdmin);

    // checking whether the user is logged in or not.
    // if user is not logged in then they will be redirected to login.

    useEffect(() => {
        if (!isAdmin) {
            props.history.push('/admin/login');
        }
    }, []);
    const [storeName, setStoreName] = useState('')
    const [success, setSuccess] = useState([])



    const terminateSession = () => {
        localStorage.clear();
        props.history.push('/admin/login');
    }



    useEffect(() => {
      
            Axios.get('https://group10projectbackend.herokuapp.com/api/getStoreNames').then((response) => {
                setSuccess(response.data);
            })

            .catch((err) => {
                console.log(err)
            })
        }, []);

        //API Call
        const submitRemove = () => {


            if (storeName === '') {
                alert("Please enter the field");
            }
            else {
                Axios.delete(`https://group10projectbackend.herokuapp.com/api/removeStore/${storeName}`
                ).then((response) => {
                    console.log(response)
                    if (response.data === "success" || response.data.changedRows === 1 || response.data.affectedRows === 1 || response.status === 200) {

                        alert("Store Removed Successfully");
                        window.location.reload();


                    }
                    else {
                        alert("Something went wrong");
                    }

                })
                    .catch((err) => {
                        console.log(err)
                    })
            }




        };

        return (

            <body id="body">
                <div id="header">
                    <div>
                        <p class="alignleft" id="boldify">Volunteer Mart</p>
                        <p class="alignright2"><a href="#" id="link1" onClick={terminateSession}>Logout</a></p>
                        <p class="alignright">Welcome Admin</p>
                    </div>
                    <br></br>

                    <hr></hr>

                    <p class="alignleftz3"><a href="https://group10proposalweb.herokuapp.com/AddItem" tabindex="1" id="link4"> AddItem</a></p>
                    <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/UpdateItem" tabindex="1" id="link3"> UpdateItem</a></p>
                    <p class="alignleftz2"><a class="current" href="https://group10proposalweb.herokuapp.com/RemoveStore" tabindex="1" id="link5"> Remove Store</a></p>
                    <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/RemoveItem" tabindex="1" id="link6"> Remove Item</a></p>
                    <p class="alignleftz1"><a href="https://group10proposalweb.herokuapp.com/AdminPanel" tabindex="1" id="link2">Create Store</a></p>

                </div>


                <div class="container">
                    <div class="childContainer">

                        <br></br>
                        {/*Store Name*/}

                        <div >

                            <b>  <label class="lab"> Store Name</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                            <input
                                name="storeName"
                                placeholder=""
                                class="form-control" onChange={(e) => {
                                    setStoreName(e.target.value)
                                }} required
                            />
                        
                        </div>


                        <br></br>
                        <div class="center">
                            <button id="redRemove" type="submit" onClick={submitRemove} >Remove Store</button>&nbsp;&nbsp;&nbsp;&nbsp;

                        </div>

                        <h4> Store List</h4>
                        {success.map((val) => {
                            return (

                                <h5>Store Name: {val.store_name}</h5>
                            );
                        })}

                    </div>
                </div>


                <div id="footer">

                    <p>©Volunteer Mart 2021. All Rights Reserved.</p>
                </div>

            </body>
        );

    }

    export default withRouter(RemoveStore);