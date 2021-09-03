// Author : Pathik Kumar Patel
// Description: The page for forgot password where user enters their new password.

import { withRouter } from "react-router";
import React, {useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import Grocery from "../grocery.png";

const UpdatePassword = (props) => {

    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [error, setError] = useState("");
  
    axios.defaults.withCredentials = true;
  
    const formData = {
      email: localStorage.getItem("resetUser"),
      password: password
    };
  
    const passwordHandler = (event) => {
      setPassword(event.target.value);
      console.log(event.target.value);
    };
    const confirmPwdHandler = (event) => {
        setConfirmPwd(event.target.value);
        console.log(event.target.value);
      };
      // validating the entered password and updating it in the database.
    function passwordValidation(event){
      event.preventDefault();
      if (password.trim().length < 8) {
        setError("Password should be of min 8 characters.");
      } else if (
        /[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)
      ) {
        setError(
          "Password should only contain alpha-numeric and special characters."
        );
      } else if (confirmPwd.trim().length < 8) {
        setError("Enter confirm Password.");
      } else if (password !== confirmPwd) {
        setError("Passwod do not match");
      }  else {
        const url = "https://group10projectbackend.herokuapp.com/api/users/updatePassword";
          console.log(formData);

          // update the password in the database.
        axios.put(url, formData).then((response) => {
          console.log("the response is: "+response);
          
          if (response.status === 500) {
            setError("server error");
          } else if (response.status === 200) {
            localStorage.removeItem("resetUser");
            localStorage.removeItem("resetQuestion");

            props.history.push({
              pathname: "/login",
            });
          } 
        });
      }
    };

    return (
<div>
        <Header />
        <div className="gap-3">
          <h1></h1>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-5">
              <img src={Grocery} className="img-fluid" alt="grocery image" />
            </div>
            <div className="col col-lg-5">
            <form onSubmit={passwordValidation}>
              <div className="container">
                <div className="text-center">
                  <h4>Reset Password</h4>
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="pwd"
                    placeholder="Password"
                    onChange={passwordHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPwd"
                    placeholder="Confirm Password"
                    onChange={confirmPwdHandler}
                  />
                </div>
                
                <div className="text-center">
                  <h6 style={{ color: "blue" }}>{error}</h6>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <h1></h1>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>

    );
}

export default withRouter(UpdatePassword);