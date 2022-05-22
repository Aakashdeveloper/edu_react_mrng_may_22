import React,{Fragment,Component} from 'react';
import './header.css'

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React Developer Funnel',
            keyword:'User Text Here'
        }
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}

export default Header;