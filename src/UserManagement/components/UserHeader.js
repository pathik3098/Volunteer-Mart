// Author : Pathik Kumar Patel
// Description : Header of website after user logs in 

import React, {Component} from 'react';
import Logo from '../../logo.png';
import "../css/Header.css";
import { withRouter } from "react-router";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


const UserHeader = (props) =>{
    

        return (
          <Navbar className="color_nav" expand="lg">
          <Navbar.Brand onClick = {() => {
                                 props.history.push("/homeStores");
                            }}>
                              <img
                            alt="Logo"
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"/>
                            {' '}Volunteer Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick = {() => {
                                 props.history.push("/homeStores");
                            }} >Home</Nav.Link>
        
              <Nav.Link onClick = {() => {
                                 props.history.push("CustomerCare");
                            }}>Customer Care</Nav.Link>
              <Nav.Link onClick = {() => {
                                 props.history.push("Cart");
                            }}>My Cart</Nav.Link>
        
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick = {() => {
                                 props.history.push("Delivery");
                            }}>Delivery</NavDropdown.Item>
                <NavDropdown.Item onClick = {() => {
                                 props.history.push("SignUp");
                            }}>Account Details</NavDropdown.Item>
                <NavDropdown.Item >Wishlist</NavDropdown.Item>
                <NavDropdown.Item onClick = {() => {
                                 props.history.push("/volunteer");
                            }}>Volunteer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick = {() => {
                                 props.history.push("/login");
                                 localStorage.removeItem("email");
                            }}>Log Out</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success"onClick = {() => {
                                 props.history.push("Delivery");
                            }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
              
        );
}

export default withRouter(UserHeader);