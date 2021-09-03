import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import listPic from './images/list.jpg'; 
import deliveryPic from './images/delivery.jpg';
import deliveredPic from './images/delivered.jpg'
import { timesSeries } from 'async';

class Delivery extends React.Component{

    state={
        notification:''
    };


    handleClick=()=>{
        alert("notification sent!")
        alert(this.state.notification)
    }

    setOrderNotification=()=>{
        this.setState({notification:'Order placed'})
    }

    setDeliveryNotification=()=>{
        this.setState({notification:'Order on Way'})
    }

    setDeliveredNotification=()=>{
        this.setState({notification:'Order Delivered'})     
    }

    render(){
        return(
            <div className="container">
          <Container fluid="sm">
              <Card border='light'>
             
              <Card border="dark">
              <Card.Title style={{textAlign:'center'}}><h1 class="mb-2">Delivery Tracker</h1></Card.Title> 
              </Card>
              
              <Card border="dark" style={{textAlign:'center',marginTop: "50px"}}>
              <Card.Body style={{textAlign:'center'}}><h3 class="mb-1">Tap on the order status and click "SEND"!</h3></Card.Body>             
              </Card>

              <Row style={{marginTop:"80px"}} >
    <Col xs={6} md={3}  style={{marginLeft:"50px"}}>

        <Card onClick={this.setOrderNotification}>
      <Card.Img variant="top" src={listPic} className="card-img-top hoverable"/>
      <Card.Body style={{textAlign:'center'}}><h6 class="mb-1">Order Placed</h6></Card.Body>             
      </Card>

    </Col>
    <Col xs={6} md={3} sm={{offset: 1 }}>
    <Card onClick={this.setDeliveryNotification}>
      <Card.Img variant="top" src={deliveryPic} className="card-img-top" />
      <Card.Body style={{textAlign:'center'}}><h6 class="mb-1">Order On Way</h6></Card.Body>             
      </Card>
    </Col>
    <Col xs={6} md={3} sm={{offset: 1 }}>
    <Card onClick={this.setDeliveredNotification}>
      <Card.Img variant="top" src={deliveredPic} className="card-img-top"/>
      <Card.Body style={{textAlign:'center'}}><h6 class="mb-1">Order Delivered</h6></Card.Body>             
     </Card>
    </Col>
  </Row>
  <Row>
  <Col xs={6} md={3} sm={{offset: 4 }}>
  <Button variant="outline-success" style={{marginTop:"50px" ,marginLeft:"100px"}} size="lg" onClick={this.handleClick}>
      Send Notification
  </Button>
  </Col>
  </Row>
  
   </Card>                       
          </Container>
            </div>
        )
    }
}

export default Delivery;