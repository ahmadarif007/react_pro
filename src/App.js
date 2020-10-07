import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import './bootstrap.min.css'

// pages...........................
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Customer from './components/pages/Customer';
import Add_Customer from './components/pages/Add_Customer'; 
import Notfound from './components/pages/Notfound'; 


function App() {
  return (
    <Fragment>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customer' component={Customer} />
            <Route path='/add-customer' component={Add_Customer} />
            <Route component={Notfound} />
          </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
