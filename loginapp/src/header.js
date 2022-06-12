import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
         <header>
            <div id="brand">
                Developer Funnel
            </div>
            <div id="social">
                <Link to="/" class="btn btn-info">Login</Link>
                <Link to="/register" class="btn btn-success">Register</Link>
            </div> 
        </header>
      </React.Fragment>
        
    )
}

export default Header