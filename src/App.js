import {BrowserRouter as Router,Switch, Route ,useHistory} from 'react-router-dom';
import './App.css';
import Delivery from './Delivery/Delivery';
import CustomerSupport from './CustomerCare/customerSupport';

import Payment from './PaymentManagement/Payment';
import { NavbarDetails } from './CartManagement/NavBarDetails';
import { Cart } from './CartManagement/Cart';
import HomePageCatalogue from './HomePage/HomePageCatalogue';
import VolunteerOrders from './Volunteer/VolunteerOrders';
import Homepage from "./UserManagement/pages/Homepage";
import UserHomepage from "./UserManagement/pages/UserHomepage";
import Login from "./UserManagement/pages/Login";
import AdminLogin from "./UserManagement/pages/AdminLogin";
import SignUp from "./UserManagement/pages/SignUp";
import ForgotPassword from "./UserManagement/pages/ForgotPassword";
import Question from "./UserManagement/pages/Question";
import UpdatePassword from "./UserManagement/pages/UpdatePassword";
import UserHeader from './UserManagement/components/UserHeader';
import AdminPanel from './AdminPage/pages/AdminPanel';
import AddItem from './AdminPage/pages/AddItem';
import UpdateItem from './AdminPage/pages/UpdateItem';
import RemoveItem from './AdminPage/pages/RemoveItem';
import RemoveStore from './AdminPage/pages/RemoveStore';
import StoreList from './FirstHomePage/storeList';


function App() {
  const history = useHistory();  
  return (
    // <div>
    //     <NavbarDetails/>
    //     <Cart/>
    // </div>
    // <div>
    //   <Header/>
    //   <Main/>
    //   <Footer/>
    // </div>
    // <div style={{'height':'100%'}}>
    //   <Header />
    //   <Payment/>
    //   <Footer />
    // </div>
    <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/userHome">
        <UserHomepage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/admin/login">
        <AdminLogin />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/resetPassword">
        <ForgotPassword />
      </Route>
      <Route exact path="/question">
        <Question />
      </Route>
      <Route exact path="/updatePassword">
        <UpdatePassword />
      </Route>
      <Route exact path = "/home">
          {" "}
          <div>
            
            <HomePageCatalogue></HomePageCatalogue>
          </div>
      </Route>
      <Route path = "/Cart">
          {" "}
          <div>
            <UserHeader/>
            <Cart/>
          </div>
          {/* <h1>WELCOME TO SecondPage</h1> */}
      </Route>
      <Route path = "/volunteer">
          {" "}
          <div>
            <UserHeader/>
            <VolunteerOrders/>
          </div>
          {/* <h1>WELCOME TO SecondPage</h1> */}
      </Route>
      <Route path = "/Delivery">
          {" "}
          <div>
            <UserHeader/>
            <Delivery/>
          </div>
          {/* <h1>WELCOME TO SecondPage</h1> */}
      </Route>
      <Route path = "/CustomerCare">
          {" "}
          <div>
            <CustomerSupport/>
          </div>
      </Route>
      <Route path = "/Payment">
          {" "}
          <div>
            <UserHeader/>
            <Payment/>
          </div>
      </Route>
      <Route path = "/AddItem">
          {" "}
          <div>
            <AddItem/>
          </div>
      </Route> 
      <Route path = "/UpdateItem">
          {" "}
          <div>
            <UpdateItem/>
          </div>
      </Route> 
      <Route exact path = "/RemoveItem">
          {" "}
          <div>
            <RemoveItem/>
          </div>
      </Route> 
      <Route exact path = "/RemoveStore">
          {" "}
          <div>
            <RemoveStore/>
          </div>
      </Route> 
      { <Route path = "/AdminPanel">
          {" "}
          <div>
            <AdminPanel/>
          </div>
      </Route> }
      <Route path = "/Wrong">
          {" "}
          <h1>Wrong Email and Password!!!</h1>
      </Route>
      <Route path = "/Wrong">
          {" "}
          <h1>Wrong Email and Password!!!</h1>
      </Route>
      <Route exact path = "/homeStores">
          {" "}
          <div>
            <StoreList/>
          </div>
      </Route> 
      <Route>
          {" "}
          <h1>WrongPage!!!</h1>
      </Route>
    </Switch>
</Router>

  );
}

export default App;
