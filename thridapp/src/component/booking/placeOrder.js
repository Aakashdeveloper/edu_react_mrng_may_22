import React,{Component} from 'react';
import './placeOrder.css';

const url = "http://localhost:8700/orders";
const menuUrl = "http://zomatoajulypi.herokuapp.com/menuItem" ;

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Nikit',
            email:'niki@gmail.com',
            cost:0,
            phone:9123456780,
            address:"Hon28",
            menuItem:''

        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu')
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewOrder'))
    }

    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
                <div className="container">
                    <hr/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Order For Restaurant {this.state.hotel_name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.handleChange}/>
                                </div>
                            </div>
                            {this.renderMenu(this.state.menuItem)}
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className="btn btn-info" onClick={this.checkout}>Proceed</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    //get menu details 
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item, 10));
            return 'ok'
        })
        fetch(menuUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseInt(item.menu_price)
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }
}

export default PlaceOrder