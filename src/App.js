import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


// https://www.youtube.com/watch?v=-edmQKcOW8s&t=20529s

class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar/>
      {/* FOR USING REACT ROUTER LIKE THIS WE NEED SETUP IN INDEX.JS FILE */}
       <Switch>
         {/* THIS IS GONNA DISPLAY ONCE THE APPLICATION LOADE */}
         <Route exact path="/" component={ProductList}></Route> {/* THERE ARE TWO WAY TO DISPLAY ROUTER FILE (1. TAKE THE HOME ROUTE IN BELOW OF ALL 2. IN HOME ROUTE RWITE EXACT) */}
         <Route path="/details" component={Details}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route component={Default}></Route>
       </Switch>
     </React.Fragment>
    );
  }
}

export default App;
