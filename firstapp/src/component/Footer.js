import React from 'react';

const Footer = (props) => {
    return(
      <React.Fragment>
          <hr/>
          <center>
              <h2>&copy; Developer Funnel- {props.month} {props.year}</h2>
          </center>
      </React.Fragment>
  )
}

export default Footer;