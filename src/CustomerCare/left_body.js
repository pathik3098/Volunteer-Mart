/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/
import React, { Component } from 'react';
import Form from './form';

function LeftBody(props) {

    
        return(
            <div className="container mt-3 mb-3 mr-3 ml-3">
                <h4 style={{'margin':0}}>Report a complain</h4>
                <small style={{'margin-bottom':40}}>Our help desk takes 24 hours to process your complaints.</small>
                <Form {...props}/>
            </div>
        );
    
}
export default LeftBody;