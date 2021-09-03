// Author : Pathik Kumar Patel
// Description: The login page.

import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router";
import Grocery from "../grocery.png";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  axios.defaults.withCredentials = true;

  const formData = {
    email: email,
    password: password,
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  // validating the user email and password.

  function loginValidation(event) {
    event.preventDefault();

    // email validation.

    if (email.trim() === "") {
      setError("Please Enter E-mail.");
    } else if (
      !/([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])/.test(email)
    ) {
      setError("Enter Valid Email");
    } 

    // passowrd validation.

    else if (password.trim().length < 8) {
      setError("Password should be of min 8 characters.");
    } else if (/[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)) {
      setError(
        "Password should only contain alpha-numeric and special characters."
      );
    } 
    
    // authenticating the user, and routing to next page if authenticated.
    else {
      const url = "https://group10projectbackend.herokuapp.com/api/users/login";
      //const url = "http://localhost:2000/api/users/login";
      console.log("entered in else");
      console.log(formData);
      axios.post(url, formData).then((response) => {
        console.log("the response is: " + response);

        if (response.status === 200) {
          localStorage.setItem("email", email);
          props.history.push({
            pathname: "/homeStores",
          });
        } else if (response.status === 500) {
          setError("server error, try again later");
        }
        else if (response.status === 204) {
          console.log(response.data.success);
          setError("email and password do not match");
        }
      });
    }
    setEmail("");
    setPassword("");
  }

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
            <form onSubmit={loginValidation}>
              <div className="container">
                <div className="text-center">
                  <h4>Login</h4>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={emailHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={passwordHandler}
                  />
                </div>
                <div className="text-center">
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    to="/resetPassword"
                  >
                    Forgot Password ?
                  </NavLink>
                </div>
                <div className="text-center">
                  <h6 style={{ color: "blue" }}>{error}</h6>
                  <button type="submit" className="btn btn-success">
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
};

export default withRouter(Login);
