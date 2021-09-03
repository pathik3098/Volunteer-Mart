// Author : Pathik Kumar Patel
// Description: The page for forgot password where user enters their answer.

import { withRouter } from "react-router";
import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Grocery from "../grocery.png";

const Question = (props) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  var question = localStorage.getItem("resetQuestion");

  axios.defaults.withCredentials = true;

  const formData = {
    email: localStorage.getItem("resetUser"),
    answer: answer
  };

  const answerHandler = (event) => {
    setAnswer(event.target.value);
  };

 // checking the answer of the user and if answer is correct, rotuing the user to new password link.
  function answerValidation(event) {
    event.preventDefault();
    if (answer.trim() === "") {
      setError("Please Enter Answer");
    } else {
      const url = "https://group10projectbackend.herokuapp.com/api/users/answer";
      console.log(formData);
      axios.post(url, formData).then((response) => {
        if (response.status === 500) {
          setError("server error");
        } else if (response.status === 200) {
          props.history.push({
            pathname: "/updatePassword",
          });
        } else if (response.status === 204) {
          console.log(response.data.success);
          setError("Incorrect answer, please try again !");
        }
      });
    }
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
            <form onSubmit={answerValidation}>
              <div className="container">
                <div className="text-center">
                  <h4>Reset Password</h4>
                </div>
                <div className="form-group">
                  <h4>Question : {question} ?</h4>
                </div>
                <div className="form-group">
                  <label>Enter your Answer :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="answer"
                    placeholder="Answer"
                    onChange={answerHandler}
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
};

export default withRouter(Question);
