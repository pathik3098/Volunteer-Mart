
/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import { useEffect, useState } from 'react';
import {Container, Row, Col , Form} from 'react-bootstrap';

import axios from 'axios';
//import {volunteerComponent} from './Components/volunteerComponent';
import {CardComponent} from './Components/CardComponent';

/*
    Homepage items are fetched from the database with their detials and rendered on the browser screen
 */

function VolunteerOrders(){
    console.log("Volunteer Page");

    //const baseUrl = 'https://homepagebackend.herokuapp.com';
    const baseUrl = 'https://group10projectbackend.herokuapp.com';
    //const baseUrl = 'http://localhost:2000';
    const getUrl = baseUrl+'/orders/details';
    const getUrl2 = baseUrl+'/orders/items/';
    const [records, setRecords] = useState([]);
    const [orderStatus, setOrderStatus] = useState([]); 
    const [searchFilter, setSearchFilter] = useState('');
    const [cartData, setCartData] = useState([]);
    

    /*items fetched from database once the page is loaded 
    using apis exposed from backend api 
    */
    useEffect( () =>{
        async function fetchData(){
            await axios.get(getUrl)
            .then(response => {
                //console.log(JSON.stringify(response));
                setRecords(response.data.data);
                console.log('Order Details from volunteer Page:');
                console.log(response.data.data);
                console.log("Order Details");
                console.log(records);

            })
            .catch(error => {
                console.log(error);
            });
        }
        fetchData();
    }, []);

    return (<div>
        <Container fluid='md' className = 'm-5' style = {{padding: "10px"}}>
             <Row>
                <Col>
                </Col>
            </Row>
            {records.map((record) => {
                return (
                <Row>
                    <Col>
                        <CardComponent record = {record}/>
                    </Col>
                </Row>
                );
            })}
        </Container>
    </div>);
}

export default VolunteerOrders;


 