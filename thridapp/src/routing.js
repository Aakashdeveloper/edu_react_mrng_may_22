import React from 'react';
import Home from './component/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './header';
import Footer from './footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;