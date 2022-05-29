import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <React.Fragment>
          <footer>
            <hr/>
            <center>&copy; Developer Funnel</center>
            <div className="footDiv">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="footDiv">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="footDiv noborder">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
        </footer>
      </React.Fragment>
        
    )
}

export default Footer