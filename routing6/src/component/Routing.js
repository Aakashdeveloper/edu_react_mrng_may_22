import React from 'react';
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './Product';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Main from './main'
import ProductDetails from './productDetails';
 
const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="products" element={<Product/>}/>
                    <Route path="products/:item" element={<ProductDetails/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="*" element={
                        <div>
                            <center>
                                <h1>Not Found Page</h1>
                            </center>
                        </div>
                    }/>
                <Route/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;