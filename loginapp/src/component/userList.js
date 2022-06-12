import axios from 'axios';
import React,{Component} from 'react';
import UserDisplay from './userDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class Users extends Component {
    constructor(props){ 
        super(props)

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }
        return(
            <>
                <UserDisplay userData={this.state.users}/>
            </>
        )
    }

    ///call 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({users:res.data})})
    }
}

export default Users