import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FormWrapper from "./components/FormWrapper";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/roommatepreferences" component={FormWrapper} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
