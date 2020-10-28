import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import GiveOrder from './components/GiveOrder/GiveOrder';
import GiveReview from './components/GiveReview/GiveReview';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ShowOrder from './components/ShowOrder/ShowOrder';


export const ServiceContext=createContext()
export const UserContext=createContext()
function App() {
  const [service,setService]=useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div >
      <ServiceContext.Provider value={[service,setService]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
<Router>
  
    <Switch>
    <Route path="/home">
      <Home></Home>
      </Route>
      <PrivateRoute path="/register/:userId">
        <GiveOrder></GiveOrder>
      </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
   <Route path="/giveReview">
     <GiveReview></GiveReview>
   </Route>
      <Route path="/showData">
        <ShowOrder></ShowOrder>
      </Route>
      <Route exact path="/">
      <Home></Home>
      
      </Route>
      </Switch>
  
</Router></UserContext.Provider>
</ServiceContext.Provider>
    
    </div>
  );
}

export default App;
