import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router";
import Grocery from "../grocery.png";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  axios.defaults.withCredentials = true;

  const formData = {
    username: username,
    password: password,
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    //console.log(event.target.value)
  };

  function loginValidation(event) {
    event.preventDefault();
    if (username.trim() === "") {
      setError("Please Enter Username.");
    } else if (password.trim().length < 1) {
      setError("Enter password");
    } else if (/[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)) {
      setError(
        "Password should only contain alpha-numeric and special characters."
      );
    } else {
      const url = "https://group10projectbackend.herokuapp.com/api/admin/login";
      console.log("entered in else");
      console.log(formData);
      axios.post(url, formData).then((response) => {
        console.log("the response is: " + response);

        if (response.status === 200) {
          localStorage.setItem("admin", username);
          props.history.push({
            pathname: "/AdminPanel",
          });
        } else if (response.status === 500) {
          setError("server error, try again later");
        }

        else if (response.status === 204) {
          console.log(response.data.success);
          setError("username and password do not match");
        }
      })
      .catch((err) =>{
        console.log(err)
      })
      
    }
    setUsername("");
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
                  <h4>Admin Login</h4>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={usernameHandler}
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

export default withRouter(AdminLogin);
