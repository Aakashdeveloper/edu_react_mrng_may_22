import React,{Fragment,Component} from 'react';
import './header.css'

class Header extends Component {

    constructor(){
        super()
        console.log(">>>>> inside constructor")
        this.state={
            title:'React Developer Funnel',
            keyword:'User Text Here'
        }
    }

    handleChange = (event) => {
        //console.log(event)
        //console.log(">>>>> inside handleChange")
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        /// here we are passing data to home
        this.props.userText(event.target.value)
    }
    
    render(){
        //console.log(">>>>> inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}

export default Header;