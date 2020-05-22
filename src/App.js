import React from 'react';
// import logo from './logo.svg';
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Login from './components/Login'
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
function App() {
 
  return (
   <> 
   <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/" component={Login} /> 
        <Route component={Error} />
      </Switch> 
   </>
  );
}

export default App;
