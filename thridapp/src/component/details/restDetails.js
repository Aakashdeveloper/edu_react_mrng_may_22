import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "http://zomatoajulypi.herokuapp.com/details";
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu";

class RestDetails extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    render(){
        //let details = this.state.details
        //destructures
        let {details} = this.state
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name}/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h1>{details.restaurant_name}</h1>
                            <span id="cfeedback">231 Customers says {details.rating_text}</span>
                            <h4>Old Price: <strike>Rs. 1200</strike></h4>
                            <h4>New Price: Rs. {details.cost}</h4>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="veg"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="veg"/>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <Tabs>
                                    <TabList>
                                        <Tab>About Restaurants</Tab>
                                        <Tab>Contact</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{details.restaurant_name}</h2>
                                        <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>{details.address}</h2>
                                        <h2>Phone: {details.contact_number}</h2>
                                    </TabPanel>
                                   
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    //calling api with async await  
    async componentDidMount(){
        let restId =this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`)
        let menuResponse = await axios.get(`${menuUrl}/${restId}`)
        this.setState({details:response.data[0],menuList:menuResponse})
    }

}

export default RestDetails;