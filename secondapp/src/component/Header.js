import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <center>
            <h2>Header</h2>
            <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            <Link to="/profile">Profile</Link>
            <hr/>
        </center>
        
    )
}

export default Header