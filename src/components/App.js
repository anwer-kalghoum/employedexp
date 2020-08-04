
import React, { Component } from 'react';

import Nav from '../components/navBar/Navbar';
import Home from "../components/showExpense/index";
import Add from "../components/addExpense/Form";
import showSummaryCurve from "../components/showSummaryCurve/index";
import { Route } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <div >
        <Nav />
        <div className="container">
          <Route exact={true} path="/" component={Home} />
          <Route exaxt path="/add" component={Add} />
          <Route exact path="/summary" component={showSummaryCurve} />
        </div>
      </div>

    );
  }
}

export default App;
