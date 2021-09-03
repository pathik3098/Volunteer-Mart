/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
//import styled from 'styled-components';
import { useHistory } from 'react-router';


export const NavbarDetails = () =>{
const history = useHistory();
return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#" onClick = {() => {
                         history.push("SignUp");
                    }}>Volunteer Mart</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1" onClick = {() => {
                         history.push("Home");
                    }} >Home</Nav.Link>

      <Nav.Link href="#action2" onClick = {() => {
                         history.push("CustomerCare");
                    }}>Customer Care</Nav.Link>
      <Nav.Link href="#action3" onClick = {() => {
                         history.push("Cart");
                    }}>My Cart</Nav.Link>

      <NavDropdown title="Account" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3"onClick = {() => {
                         history.push("Delivery");
                    }}>Delivery</NavDropdown.Item>
        <NavDropdown.Item href="#action4" onClick = {() => {
                         history.push("SignUp");
                    }}>Account Details</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Wishlist</NavDropdown.Item>
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
                         history.push("Delivery");
                    }}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);

}