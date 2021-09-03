/*
Author: Narendran Krishnakumar
Page Function: Adds a store to the db
*/
import React, {useState, useEffect} from "react";
import '../css/AdminStyles.css';
import Axios from 'axios'
import { Redirect, Route, withRouter } from "react-router-dom";


function AdminPanel(props) {

  var isAdmin = localStorage.getItem('admin');
  console.log(isAdmin);

  // checking whether the user is logged in or not.
  // if user is not logged in then they will be redirected to login.
 
  useEffect(() => {
    if(!isAdmin){
      props.history.push('/admin/login');
    }
  },[]);
  
  const [storeName,setStoreName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [price,setPrice] = useState('')
  const [logo,setLogo] = useState('')
  const [opHrs,setopHrs] = useState('')



  const terminateSession=()=>{
    localStorage.clear();
    props.history.push('/admin/login');
}


const submitAdd = () => {

//API Call
  if(storeName===''||phone==='' || address===''|| price==='' ||logo===''||opHrs==='' ){
    alert("Please enter all the fields");
  }
  else{
    Axios.post("https://group10projectbackend.herokuapp.com/api/addStore",{
      storeName:storeName,
      phone:phone,
      address:address,
      price:price,
      logo:logo,
      opHrs:opHrs
    }).then((response)=>{
      console.log(response)
  
      if(response.data===""){
        alert("User Already Exists")
        window.location.reload();
      }
     else if(response.data==="success"  || response.data.changedRows===1||response.data.affectedRows===1||response.status===200){
        
        alert("Store Successfully added");
        window.location.reload();
       
  
      }
      else{
        alert("Something went wrong");
      }
      
    }) 
    .catch((err) =>{
      console.log(err)
    })
  }
  

  
}



  return (
    <body id="body">
      <div id="header">
        <div>
          <p class="alignleft" id="boldify"> Volunteer Mart</p>
          <p class="alignright2"><a href="#" id="link1" onClick={terminateSession}>Logout</a></p>
          <p class="alignright">Welcome Admin</p>
        </div>
        <br></br>

        <hr></hr>
   
    <p class="alignleftz3"><a  href="https://group10proposalweb.herokuapp.com/AddItem" tabindex="1" id="link4"> AddItem</a></p>
                <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/UpdateItem" tabindex="1" id="link3"> UpdateItem</a></p>
                <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/RemoveStore" tabindex="1" id="link5"> Remove Store</a></p>
                <p class="alignleftz2"><a href="https://group10proposalweb.herokuapp.com/RemoveItem" tabindex="1" id="link6"> Remove Item</a></p>
                <p class="alignleftz1"><a  class = "current" href="https://group10proposalweb.herokuapp.com/AdminPanel" tabindex="1" id="link2">Create Store</a></p>

        
      </div>


      <div class="container">
      <div class="childContainer">
      
        <br></br>
        {/*Store Name*/}

        <div >

        <b>  <label class="lab"> Store Name</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

          <input
            name="storeName"  id = "storeName"
            placeholder=""
            class="form-control"  onChange={(e)=>{
              setStoreName(e.target.value) 
            }} required
          />

        </div>

        {/*Phone */}

        <div >

       <b>   <label class="lab">Phone Number</label> </b>&nbsp;&nbsp;&nbsp;&nbsp;

          <input
            name="phone"   id = "phone"
            placeholder=""
            class="form-control" onChange={(e)=>{
              setPhone(e.target.value)
            }} required
          />

        </div>

        {/*Address*/}
        <div >

       <b>   <label class="lab"> Address</label> </b>&nbsp;&nbsp;&nbsp;&nbsp;



          <textarea name="address"   id = "address" Placeholder="Enter Address with Postal Code" class="form-control"  onChange={(e)=>{
              setAddress(e.target.value)
            }} required>

          </textarea>
        </div>
       

           {/*Operating hours*/}

           <div>
         <b> <label class="lab"> Operating Hours

          </label> </b> &nbsp;&nbsp;&nbsp;<br />

          <input type="checkbox" id="time1" name="time1"  value="time1" onChange={(e)=>{
              setopHrs(e.target.value)
            }} /> &nbsp;&nbsp;
          <label for="time1">Mon-Fri(9-5)</label>&nbsp;&nbsp;&nbsp;
          <input type="checkbox" id="time2"   name="time2" value="time2" onChange={(e)=>{
              setopHrs(e.target.value)
            }}/>&nbsp;&nbsp;
          <label for="time2"> Mon-Fri(12/24 hours)</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="checkbox" id="time3"  name="time3" value="time3" onChange={(e)=>{
              setopHrs(e.target.value)
            }}/>&nbsp;&nbsp;
          <label for="time3"> Sat/Sun(Off) </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="checkbox" id="time4"  name="time4" value="time4" onChange={(e)=>{
              setopHrs(e.target.value)
            }} />&nbsp;&nbsp;
          <label for="time4"> Sat/Sun(On) </label>&nbsp;&nbsp;&nbsp;&nbsp;
         
        </div>


        {/*Select Price*/}

        <div>
        <b>  <label class="lab"> Price Range</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

          <select name="price" id="price" onChange={(e)=>{
              setPrice(e.target.value)
            }} required >
            <option value="null">--Select--</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>
        {/*Logo*/}

        <div>
        <b>  <label class="lab"> Logo </label></b> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            name="logo" id="logo"
            placeholder="Enter the URL of the logo"
            class="form-control" onChange={(e)=>{
              setLogo(e.target.value)
            }} required
          />

        </div>

        <br></br>
        <div class="center">     
        <button type="submit" onClick={submitAdd} >Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://group10proposalweb.herokuapp.com/AdminPanel"><button class = "center2"  id="cancelButton" type="button" >Cancel</button></a> 
            </div>
          
            </div>
      </div>
      
      <div id="footer">

        <p>©Volunteer Mart 2021. All Rights Reserved.</p>
      </div>

    </body>
  );
}

export default withRouter(AdminPanel);