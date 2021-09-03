
/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import {Container, Row, Col, Button, Card, ListGroup} from 'react-bootstrap';
//import {CardComponent} from './Components/CardComponent';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Cart = () =>{

    // ** BASE url of the backend apis exposed for this frontend application

    //const baseUrl = 'https://homepagebackend.herokuapp.com';
    const baseUrl = 'https://group10projectbackend.herokuapp.com';
    //const baseUrl = 'http://localhost:2000';
    var deleteUrl = baseUrl + "/cart/delete/";
    var getUrl = baseUrl + "/cart/items";
    const [records, setRecords] = useState([]);
    const history = useHistory();
    const [itemID, setItemID] = useState(0);

    //**  fetching data from the get api exposed from backend
    async function fetchData(){
        await axios.get(getUrl)
        .then(response => {
            //console.log(JSON.stringify(response));
            setRecords(response.data.data);
            console.log(response.data);
        
        })
        .catch(error => {
            console.log(error);
        });

        console.log("Records");
        console.log(records);
        
    }

    // *rendering page with any change in the itemID const value
    useEffect( () =>{
        handleRemoveThisItem();
        fetchData();
    }, [itemID]);

    // *Removing all items together on sigle click
    const handleRemoveAll = () => {
        axios.put(baseUrl+"/cart/truncate")
        .then(response => {
            //console.log(JSON.stringify(response));
            fetchData();
        
        })
        .catch(error => {
            console.log(error);
        });
    };

    // *Removing single item based on the bouton click using backend delete api exposed
    const handleRemoveThisItem = () => {
        axios.delete(deleteUrl+itemID)
            .then(response => {
                //console.log(JSON.stringify(response));
                fetchData();
                
            })
            .catch(error => {
                console.log(error);
            });
      }
    

    return(

        <div style={{ margin: "25px" }}>
        <Row xs={1} md={4} className="g-4">
          {records.map((record, idx) => {
            const data = {
              ID: record.item_id,
              picture: record.item_image,
              name: record.item_name,
              used_quantity: record.item_qty,
              price: record.item_price,
              description: record.item_desc,
              store: record.store_name,
            };

            return(
            <Col key={idx}>
              <Card style={{ width: "18rem",fontFamily:'Roboto Mono'}}>
                <Card.Img src={data.picture} className="img-thumbnail" variant="top" style={{height:"250px"}}/>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text style={{ height: "2rem"}}>
                    {data.description}
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item >Price : {data.price}</ListGroup.Item>
                    <ListGroup.Item>
                      Added Items : {data.used_quantity}
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    variant="success"
                    onClick={() => {
                      setItemID(data.ID);
                      handleRemoveThisItem();
                    }}
                  >
                    Remove Item
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            );
          })}
        </Row>
        <Row style={{ margin: "25px" }}>
                <Col>
                    <Button variant="outline-danger" className="float-left" style = {{width: 200}} onClick = {
                        handleRemoveAll 
                    }>Remove All</Button>
                </Col>
            
                <Col>
                    <Button variant="success" className="float-right" style = {{width: 200}} onClick = {() => {
                        history.push("Payment"); 
                    }}>Payment</Button>
                </Col>
            </Row>
      </div>





        // <Container fluid='md' className = 'm-5'>
        //     {records.map((record) => {
        //         const data = {
        //             "ID": record.item_id,
        //             "picture": record.item_image,
        //             "name": record.item_name,
        //             "used_quantity": record.item_qty,
        //             "price": record.item_price,
        //             "description": record.item_desc,
        //             "store": record.store_name
        //           };
        //         return (
        //         <Row>
        //             <Col>
        //             <Card className = "w-90 h-30 p-10">
        //                 <Row>
        //                     <Col>
        //                     <Card.Body>
        //                         <Card.Img style = {{height: '10rem'}} className="w-50 p-100" variant="Left" src={data.picture}/>
        //                     </Card.Body>
        //                     </Col>
        //                     <Col>
        //                     <Row>
        //                         <Card.Title style = {{
        //                             color: "black",
        //                             backgroundColor: "lightgreen",
        //                             padding: "10px",
        //                             fontFamily: "Arial"}}>
        //                         {data.name}
        //                         </Card.Title>
        //                     </Row>
        //                     <Row>
        //                         <Card.Body>
        //                         <Row style = {{
        //                             color: "black",
        //                             padding: "10px",
        //                             fontFamily: "Arial"}}>
        //                             Price : ${data.price}<br/>
        //                         </Row>
        //                         <Row  style = {{
        //                             color: "black",
        //                             padding: "10px",
        //                             fontFamily: "Arial"}}>
        //                             Description : {data.description}<br/>
        //                         </Row>
        //                         </Card.Body>
        //                     </Row>
        //                     <Row>
        //                         <Col  style = {{
        //                             color: "black",
        //                             padding: "10px",
        //                             fontFamily: "Arial"}}>
        //                         Added Items : {data.used_quantity}
        //                         </Col>         
        //                     </Row>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col>
        //                     <Button style={{margin:'20px'}} variant="outline-danger" className="float-right"onClick = {() => {
        //                         setItemID(data.ID);
        //                         handleRemoveThisItem();
        //                     }}>Remove Item</Button>
        //                     </Col>
        //                 </Row>
        //             </Card>
        //             </Col>
        //         </Row>
        //         );
        //     })}
            // <Row>
            //     <Col>
            //         <Button variant="outline-danger" className="float-left" style = {{width: 200}} onClick = {
            //             handleRemoveAll 
            //         }>Remove All</Button>
            //     </Col>
            
            //     <Col>
            //         <Button variant="primary" className="float-right" style = {{width: 200}} onClick = {() => {
            //             history.push("Payment"); 
            //         }}>Payment</Button>
            //     </Col>
            // </Row>
            
        // </Container>
    );
}