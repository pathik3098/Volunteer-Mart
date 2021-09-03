// Author : Pathik Kumar Patel
// Description: The homepage after user is logged in.

import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { withRouter } from "react-router";
import UserHeader from "../components/UserHeader";

const UserHomepage = (props) => {
  var isUser = localStorage.getItem('email');
  console.log(isUser);

  // checking whether the user is logged in or not.
  // if user is not logged in then he will be redirected to login.
  useEffect(() => {
    if(!isUser){
      props.history.push('/login');
    }
  },[]);
  return <UserHeader />;
};

export default withRouter(UserHomepage);
