/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/
import React, { Component } from 'react';
import List from './list';

function RightBody(props) {
        return (
            <div>
                <div className="row mt-4 ml-2">
                    <div className="col-10">
                        <h4>Ticket Box</h4>
                    </div>
                    <div className="col-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16"><path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>
                    </div>
                </div>
                <List list = {props.list} {...props}/>
            </div>
        );
}
export default RightBody;