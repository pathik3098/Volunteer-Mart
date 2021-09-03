/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/
import React, { Component, useState } from 'react';
import LeftBody from './left_body';
import RightBody from './right_body';

function Body(props) {

    const [details,setDetails] = useState({});
        return(
            <div className="row">
                <div className="col">
                    <LeftBody details = {details} {...props}/>
                </div>
                <div className="col border-left">
                    <RightBody list = {props.list} setDetails={setDetails}/>
                </div>
            </div>
        );
}
export default Body;