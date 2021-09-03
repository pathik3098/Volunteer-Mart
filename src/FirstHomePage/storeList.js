/*
Author: Kishan Rakeshbhai Patel
Dal Id: B00882970
email id: kishanp@dal.ca
*/
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import UserHeader from "../UserManagement/components/UserHeader";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

function StoreList(props) {
  const history = useHistory();
  const [storeList, setList] = useState([]);
  var isUser = localStorage.getItem('email');
  const url = "https://group10projectbackend.herokuapp.com/homepagenew/getStores";

  useEffect(() => {
    if(!isUser){
      props.history.push('/login');
    }
    fetchComplains();
  }, []);

  //get all the complaints submitted by the current user
  async function fetchComplains() {
    await axios.get(url).then((res) => {
      console.log(res.data.data);
      setList(res.data.data);
    });
  }

  function showProducts(store) {
    history.push({
      pathname: "/home",
      state: { data: store },
    });
  }

  return (
    <div>
      <UserHeader />

      {/* {storeList.map((store, index) => (
        <Row key={index}>
          <Col>
            <button
              style={{ backgroundColor: "#8EE4AF", width: "200px" }}
              onClick={() => showProducts(store)}
            >
              {store.store_name}
            </button>
          </Col>
        </Row>
      ))} */}
  <div style={{margin:"25px"}}>
      <Row xs={1} md={3} className="g-4">
        {Array.from(storeList).map((store, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      src={store.store_logo}
                      style={{ height: "120px" }}
                    />
                  </Col>
                  <Col>
                    <Card.Title >
                      {store.store_name}
                    </Card.Title>
                    <Card.Text>{store.store_addr}</Card.Text>
                    <Button variant="success" onClick={() => showProducts(store)}>Visit Store!</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
}

export default withRouter(StoreList);
