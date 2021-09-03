/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/
import React, { Component, useState } from 'react';

function List(props) {
    const { setDetails, list } = props;
    const [complainList, setComplain] = useState({});

    return (
        <div>
            <div className="mr-3 ml-3 rounded mt-4 pr-2 pl-2 pt-2" style={{ backgroundColor: '#f5f5f5', height: '390px', overflowY: 'scroll' }}>
                {list && list.length > 0
                    ? list.map((ticket, index) => (
                        <div key={index}>
                            <div className="row align-items-center rounded border border-success mr-2 ml-2 mt-2 mb-2 pl-2" style={{ backgroundColor: '#FFFFFF' }}>
                                <div className="col-1 pl-3 rounded-circle" style={{ backgroundColor: '#DEEDD6'}}>
                                    <h6>{ticket.ticketId}</h6>
                                </div>
                                <div className="col-6 pt-3 pb-3">
                                    <h6 style={{ 'margin': 0 }}>Ticket No: {ticket.ticketNumber}</h6>
                                    <h6>Type: {ticket.type}</h6>
                                </div>
                                <div className="col-3">
                                    <h6>Status: {ticket.status}</h6>
                                </div>
                                {ticket.status.match("Pending") || ticket.status.match("pending") 
                                ? <div className="col-2">
                                    <button onClick={() => setDetails(ticket)} style={{ backgroundColor: '#0AAD0A', color: '#FFFFFF' }}>Update</button>
                                </div>
                                : <div className="col-2">
                                </div>}
                                
                            </div>
                        </div>
                    ))
                    : <p>No tickets found!</p>}

            </div>
        </div>
    );

}
export default List;