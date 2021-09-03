
/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import {Card, Row, Col, Container} from 'react-bootstrap';
//import SecondPage from './SecondPage';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import { useEffect, useState } from 'react';

/* Frontend component of all the elements fetched from database and rendered on the browser screen
 */

export const CardComponent = (Props) => {
    //const [usedQuantity, setUsedQuantity] = useState(0);
    const [records, setRecords] = useState([]);
    //const baseUrl = 'https://homepagebackend.herokuapp.com';
    const baseUrl = 'https://group10projectbackend.herokuapp.com';
    //const baseUrl = 'http://localhost:2000';
    const data = {
        "order_id": Props.record.order_id,
        "order_status": Props.record.order_status
    }
    
    /* Fetching number of added items from the cart table in databse
        using api exposed  */
    async function fetchData(){
        console.log("Fetching Data");
        console.log(baseUrl+'/orders/items/'+data.order_id);
        await axios.get(baseUrl+'/orders/items/'+data.order_id)
        .then(response => {
            //console.log(JSON.stringify(response));
            console.log('Order Items from volunteer Page:');
            setRecords(response.data.data);
            console.log(response.data.data);
        })
        .catch(error => {
            console.log(error);
        }, []);

    }

    /* Fetching data once the page load */
    useEffect( () => {
        fetchData();
    },[]);

    


    return (
        
        <div>
        <Container fluid='md' className = 'm-5' style = {{padding: "10px"}}>
             <Row>
                <Col>
                <h2>Order:</h2>
                </Col>
            </Row>
            {records.map((record) => {
                return (
                <div>
                    <Row>
                        <Col>
                            Name : 
                        </Col>
                        <Col>
                            {record.item_name}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Quantity : 
                        </Col>
                        <Col>
                            {record.item_qty}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Price : 
                        </Col>
                        <Col>
                            {record.item_price}
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                    </Row>
                </div>
                );
            })}
        </Container>
    </div>
        
    );
}

export default CardComponent;