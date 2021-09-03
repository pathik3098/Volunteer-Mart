import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import listPic from '../assets/list.jpg'; 
import deliveryPic from '../assets/delivery.jpg';
import deliveredPic from '../assets/delivered.jpg';
import '../App.css';
import axios from 'axios';

class Delivery extends React.Component{

    state={
        notification:'',
        colorconfirm:false,
        colorway:false,
        colordeliver:false
    };

    changeColorConfirm(){
        // alert('color confirm')
        this.setState({colorconfirm: !this.state.colorconfirm})
        
    }

    changeColorWay(){
        this.setState({colorway: !this.state.colorway})        
    }

    changeColorDelivered(){
        this.setState({colordeliver: !this.state.colordeliver})        
    }

    handleClick=()=>{
        if(this.state.notification==''){
            alert("Please select the order status")
        }
        else{
        alert(this.state.notification)
        this.clearStatus()
        this.changeDeliveryStatus()
        }
    }

    changeDeliveryStatus = async()=>{
        const { match, location, history } = this.props
        const status = this.state.notification;
        const id = location.state.id;
        const response = await axios.post("https://backend-nodeapp.herokuapp.com/delivery", { id, status }).then(result => {
            console.log("done");
        });
      }

    clearStatus=()=>{
        this.setState({notification:''})
    }

    setOrderNotification=()=>{
        this.changeColorConfirm()
        if(this.state.colorconfirm !== true){
        this.setState({notification:'Order has been confirmed!'})
        
        }
        else{
            this.setState({notification:'Order has been NOT confirmed!'})
        }
    }

    setDeliveryNotification=()=>{
        this.changeColorWay()
        if(this.state.colorway !== true){
        this.setState({notification:'Order on Way'})
        // this.clearStatus()
        }
        else{
            this.setState({notification:'Order is NOT on the way!'})
        }
    }

    setDeliveredNotification=()=>{
        this.changeColorDelivered()
        if(this.state.colordeliver !== true){
        this.setState({notification:'Order Delivered'})     
        }
        else{
            this.setState({notification:'Order is NOT Delivered!'})
        }
    }

    render(){
        console.log("aeeeeeeee")
        let btn_class_confirm = this.state.colorconfirm ? "myClick" : "";
        let btn_class_way = this.state.colorway ? "myClick" : "";
        let btn_class_deliver = this.state.colordeliver ? "myClick" : "";
        return(
            <div className="container">
          <Container fluid="md">
              <Card border='light'>
             
              <Card border="dark">
              <Card.Title style={{textAlign:'center'}}><h1 class="mb-4 margin-top">Delivery Tracker</h1></Card.Title> 
              </Card>
              
              <Card border="dark" style={{textAlign:'center',marginTop: "50px"}}>
              <Card.Body style={{textAlign:'center'}}><h3 class="mb-1">Tap on the order status and click "SEND"!</h3></Card.Body>             
              </Card>

              <Row style={{marginTop:"80px"}} >
    <Col xs={6} md={3}  style={{marginLeft:"50px"}}>

        {/* <Card className="card1"  onClick={this.setOrderNotification}> */}
        <Card className={btn_class_confirm}  onClick={()=>{
            
            this.setOrderNotification()

            }}>
      <Card.Img style={{cursor: "pointer"}} variant="top" src={listPic} className="card-img-top"/>
      {/* <Card.Body style={{textAlign:'center'}}><h6 class="mb-1">Order Placed</h6></Card.Body>              */}
      <Card.Footer style={{textAlign:'center'}}>Confirm Order</Card.Footer>
      </Card>

    </Col>
    <Col xs={6} md={3} sm={{offset: 1 }}>
    <Card className={btn_class_way}  onClick={()=>{
            
            this.setDeliveryNotification()
            // this.changeColorWay()
            }}>
      <Card.Img style={{cursor: "pointer"}} variant="top" src={deliveryPic} className="card-img-top" />
      <Card.Footer style={{textAlign:'center'}}>Order on the way</Card.Footer>             
      </Card>
    </Col>
    <Col xs={6} md={3} sm={{offset: 1 }}>

    <Card className={btn_class_deliver}  onClick={()=>{
            
            this.setDeliveredNotification()
            // this.changeColorDelivered()
            }}>
      <Card.Img style={{cursor: "pointer"}} variant="top" src={deliveredPic} className="card-img-top"/>
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

export default withRouter(Delivery);
