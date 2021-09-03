
/*
Author: Manraj Singh
Dal Id: B00877934
email id: mn697903@dal.ca
*/

import axios from 'axios';
import { Card, Row, Col, Button} from 'react-bootstrap';


export const CardComponent = (Props) =>{

  //base URL for the backend api exposed

  var baseUrl = 'https://group10projectbackend.herokuapp.com';
  var deleteUrl = baseUrl + "/cart/delete/";
  
  //data fetched from another component and rendered on this page 
  const data = {
    "ID": Props.record.item_id,
    "picture": Props.record.item_image,
    "name": Props.record.item_name,
    "used_quantity": Props.record.item_qty,
    "price": Props.record.item_price,
    "description": Props.record.item_desc,
    "store": Props.record.store_name
  };
  

  //Removing single items from the cart page handled on click of button
  const handleRemoveThisItem = () => {
    axios.delete(deleteUrl+data.ID)
        .then(response => {
            //console.log(JSON.stringify(response));
            
        })
        .catch(error => {
            console.log(error);
        });
  }


return (      
<Card>
  <Row>
    <Col>
      <Card.Body>
        <Card.Img className="w-50" variant="Left" src={data.picture}/>
      </Card.Body>
    </Col>
    <Col>
      <Row>
        <Card.Title>
          {data.name}
        </Card.Title>
      </Row>
      <Row>
        <Card.Body>
          <Row>
            Price : {data.price}<br/>
          </Row>
          <Row>
            Description : {data.description}<br/>
          </Row>
        </Card.Body>
      </Row>
      <Row>
        <Col>
          Added Items : {data.used_quantity}
        </Col>         
      </Row>
    </Col>
  </Row>
  <Row>
    <Col>
    <Button style={{margin:'20px'}} variant="outline-danger" className="float-right"onClick = {handleRemoveThisItem}>Remove Item</Button>
    </Col>
  </Row>
</Card>
);

}
