/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import { Card, Row, Col, Button,ListGroup } from "react-bootstrap";
//import SecondPage from './SecondPage';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

/* Frontend component of all the elements fetched from database and rendered on the browser screen
 */

export const CardComponent = (Props) => {
  const [usedQuantity, setUsedQuantity] = useState(0);
  //const baseUrl = 'https://homepagebackend.herokuapp.com';
  const baseUrl = "https://group10projectbackend.herokuapp.com";
  //const baseUrl = 'http://localhost:2000';
  const data = {
    ID: Props.record.item_id,
    picture: Props.record.item_image,
    name: Props.record.item_name,
    available_quntity: Props.record.item_qty,
    price: Props.record.item_price,
    description: Props.record.item_desc,
    store: Props.record.store_name,
    used_quantity: 0,
  };

  /* Fetching number of added items from the cart table in databse
        using api exposed  */
  async function fetchData() {
    console.log("Fetching Data");
    await axios
      .get(baseUrl + "/cart/items/" + data.ID)
      .then((response) => {
        //console.log(JSON.stringify(response));
        data.used_quantity = response.data.item_qty;
        setUsedQuantity(data.used_quantity);
        console.log("Used Quantity" + data.used_quantity);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Fetching data once the page load */
  useEffect(() => {
    fetchData();
  }, []);

  /* adding the item to the cart table and updating 
    the count if the item already existing  */
  const handleAddItem = () => {
    const AddItemURL = baseUrl + "/cart/add";
    fetchData();
    console.log("inside onClick = {handleSignUp}");
    axios
      .post(AddItemURL, Props.record)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Item Added !!!!");
          fetchData();
          //history.push("ThirdPage");
        } else {
          //history.push("Wrong");
          console.log("Item Not Added ERROR !!!!");
        }
      })
      .catch((error) => {
        console.log(error);
        //history.push("Wrong")
      });
  };

  return (
    <Card style={{ width: "18rem", height:"33rem" }}>
      <Card.Img className="img-thumbnail" variant="top" src={data.picture} style={{height:"250px"}} rounded/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text style={{ height:"2rem" }}>{data.description}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>Price : {data.price}</ListGroup.Item>
          <ListGroup.Item>
            Available Items : {data.available_quntity}
          </ListGroup.Item>
          <ListGroup.Item>Added Items : {usedQuantity}</ListGroup.Item>
        </ListGroup>
        <Button
          variant="success"
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </Card.Body>
    </Card>

    /* <Card className = "w-90 h-30 p-10" >
                <Row>
                    <Col>
                        <Card.Img style = {{height: '10rem', padding: "10px"}} className="w-50 p-100" variant="Left" src={data.picture}/>
                    </Col>
                    <Col>
                        <Row>
                            <Card.Title style = {{
                                    color: "black",
                                    backgroundColor: "lightgreen",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                {data.name}
                            </Card.Title>
                        </Row>
                        <Row>
                            <Card.Body>
                                <Row style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                    Price : {data.price}<br/>
                                </Row>
                                <Row style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                    Description : {data.description}<br/>
                                </Row>
                            </Card.Body>
                        </Row>
                        <Row>
                        <Col style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                Available Items : {data.available_quntity}
                            </Col>
                            <Col style = {{
                                    color: "black",
                                    padding: "10px",
                                    fontFamily: "Arial"}}>
                                Added Items : {usedQuantity}
                            </Col>
                            
                        </Row>
                        <Row>
                            <Button variant="primary" className="float-right" style = {{width: 200}} onClick = {handleAddItem}>Add Item</Button>
                        </Row>
                    </Col>
                </Row>
            
            </Card> */
  );
};

export default CardComponent;
