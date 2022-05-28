import React from 'react';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom'
import Product from './Product';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={Product}/>
                <Route path="/profile" component={Profile}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;