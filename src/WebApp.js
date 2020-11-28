import React, { Component } from 'react';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Description from './components/Description';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class WebApp extends Component {
    state={
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/movies/:title" component={Description}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default WebApp
