/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/

import React, { Component, useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Form(props) {

    const { details, fetchComplains } = props;
    const [descLength, setLength] = useState(0);
    const [state, setState] = useState({
        type: 'select',
        desc: '',
        error: '',
        ticketNumber: ''
    });
    const [view, setView] = useState(false);
    const previousProps = useRef({ details }).current;

    useEffect(() => {
        setView(false);
    }, []);

    //set data of a complaint in a form
    useEffect(() => {
        if (previousProps.details !== details) {
            if (details) {
                setView(true);
                setState({ ...state, type: details.type, desc: details.desc, ticketNumber: details.ticketNumber });
                setLength(details.desc.length);
            }
        }
        return () => {
            previousProps.details = details
        }

    }, [details]);

    function updateVariable(event) {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(val);

        setState({ ...state, [nam]: val });
        if (nam.match("desc")) {
            console.log(state.desc.length);
            setLength(state.desc.length);
        }
    }

    //validate form
    function validate(e) {
        e.preventDefault();
        if (state.type.match('select')) {
            setState({ ...state, error: 'Please select a category' });
        } else if (state.desc && state.desc.trim().length === 0) {
            setState({ ...state, error: 'Please add description of the complaint' });
        } else {
            setState({ ...state, error: '' });
            if (view) {
                updateComplain();
                setView(false);
            } else {
                addComplains();
            }
        }
    }

    //submit a complain
    async function addComplains() {
        const email = localStorage.getItem('email');
        if (email) {
            const data = new URLSearchParams();
            data.set('email', email);
            data.set('desc', state.desc);
            data.set('type', state.type);
            console.log(email);
            const url = "https://group10projectbackend.herokuapp.com/support/complainsubmit";
            await axios.post(url, data).then((res) => {
                fetchComplains();
            });
        } else {
            setState({ ...state, error: 'Please login again' });
        }
    }

    //update a submitted complaint
    async function updateComplain() {
        const email = localStorage.getItem('email');
        if (email) {
            const data = new URLSearchParams();
            data.set('email', email);
            data.set('desc', state.desc);
            data.set('type', state.type);
            data.set('ticketNumber', state.ticketNumber);
            const url = "https://group10projectbackend.herokuapp.com/support/complainupdate";
            await axios.post(url, data).then((res) => {
                fetchComplains();
            });
        } else {
            setState({ ...state, error: 'Please login again' });
        }
    }

    return (
        <div className="rounded pt-3 pb-3 pr-3 pl-3 mt-3 mr-3" style={{ 'backgroundColor': '#f5f5f5' }}>
            <form onSubmit={validate}>
                <h6 style={{ 'margin-top': 20 }}>Complaint type</h6>
                <div className="mb-3 mr-3">
                    <select className="form-control" name="type" onChange={updateVariable} value={state.type}>
                        <option value="select">Select a category</option>
                        <option value="Order Return">Order Return</option>
                        <option value="Refund">Return & Refund</option>
                        <option value="Order Cancel">Order Cancel</option>
                        <option value="Payment">Payment</option>
                    </select>
                </div>
                <h6 style={{ 'margin-top': 20 }}>Description</h6>
                <div class="form-outline mb-3 mr-3">
                    <textarea className="form-control" name="desc" rows="4" maxLength="100" placeholder="Description" onChange={updateVariable} value={state.desc}></textarea>
                    <h6 class="pt-1">{descLength}/100 words</h6>
                </div>
                <div className="text-right mr-3">
                    <h4>{state.error}</h4>
                    <button type="submit" className="btn pr-5 pl-5 mb-3 mt-2" style={{ backgroundColor: '#0AAD0A', color: '#FFFFFF' }}>{view ? 'Update' : 'Submit'}</button>
                </div>
            </form>
        </div>
    );

}
export default Form;