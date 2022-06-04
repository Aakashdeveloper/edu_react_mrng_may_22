import React from 'react';
import Home from './component/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import Listing from './component/Listing/listing';
import Details from './component/details/restDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:id" component={Listing}/>
            <Route path="/details" component={Details}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;