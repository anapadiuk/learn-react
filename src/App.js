import './App.css';
import Table from './Table';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import Nav from "./components/nav.component";

function App() {
    return (<Router>
        <div className="App">
            <Nav />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/sign-in" component={Login} />
                        {/* <Route path="/dashboard" component={Dashboard} /> */}
                        {/* <Route path="/sign-up" component={SignUp} /> */}
                    </Switch>
                </div>
            </div>
        </div></Router>
    );
}


export default App