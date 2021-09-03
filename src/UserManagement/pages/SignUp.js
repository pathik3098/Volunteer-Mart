// Author : Pathik Kumar Patel
// Description: The page for user Sign Up.

import { withRouter } from "react-router";
import Header from "../components/Header.js";
import Grocery from "../grocery.png";
import { useState } from "react";
import axios from "axios";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pwd: "",
    confirmPwd: "",
    question: "",
    answer: ""
  });

  const [error, setError] = useState("");

  // getting the input value of sign up form.
  const formHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value.toString();
    setFormData({ ...formData, [name]: value });
  };

 // validating the information filled by user in form.
  const signUpValidation = (event) => {
    event.preventDefault();

    if (formData.username.trim() === "") {
      setError("Please Enter Username.");
    } else if (/[^a-zA-Z0-9]/.test(formData.username)) {
      setError("Username accepts alpha-numeric characters only.");
    } else if (formData.email.trim() === "") {
      setError("Please Enter E-mail.");
    } else if (
      !/([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])/.test(
        formData.email
      )
    ) {
      setError("Enter Valid Email");
    } else if (formData.pwd.trim().length < 8) {
      setError("Password should be of min 8 characters.");
    } else if (
      /[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(formData.pwd)
    ) {
      setError(
        "Password should only contain alpha-numeric and special characters."
      );
    } else if (formData.confirmPwd.trim().length < 8) {
      setError("Enter confirm Password.");
    } else if (formData.pwd !== formData.confirmPwd) {
      setError("Passwod do not match");
    } else if (formData.question.trim() === "") {
      setError("Please Enter Question");
    } else if (/[^a-zA-Z]/.test(formData.question)) {
      setError("Question should have alphabets only.");
    } else if (formData.answer.trim() === "") {
      setError("Please Enter Answer.");
    } else if (/[^a-zA-Z0-9]/.test(formData.answer)) {
      setError("Answer accepts aplhabets only.");
    } else {
      const url = "https://group10projectbackend.herokuapp.com/api/users/signup";

      // sending request to the api to store the user data.
      axios.post(url, formData)
        .then(function (response) {
          console.log("the response is: "+response);
          if (response.status === 200) {
            console.log(response.status);
            console.log(response.data);
            if (response.data.success) {
              props.history.push({
                pathname: "/",
              });
            } else {
              setError("Server error");
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setFormData({
      username: "",
      email: "",
      pwd: "",
      confirmPwd: "",
      question: "",
      answer: ""
    });
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
            <form onSubmit={signUpValidation}>
              <div className="container">
                <div className="text-center">
                  <h4>Sign Up</h4>
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.username}
                    name="username"
                    placeholder="Username"
                    onChange={formHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.email}
                    name="email"
                    placeholder="E-mail"
                    onChange={formHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={formData.pwd}
                    name="pwd"
                    placeholder="Password"
                    onChange={formHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={formData.confirmPwd}
                    name="confirmPwd"
                    placeholder="Confirm Password"
                    onChange={formHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Security Question</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.question}
                    name="question"
                    placeholder="Security Question"
                    onChange={formHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Answer</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.answer}
                    name="answer"
                    placeholder="Answer"
                    onChange={formHandler}
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

export default withRouter(SignUp);
