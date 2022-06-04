import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay'

const restOnMeal = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component {
    constructor(){
        super()

        this.state={
            restaurantList:''
        }
    }

    render() {
        return(
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                    </div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>
            </div>
        )
    }

    //call api 
    componentDidMount(){
        let mealId = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${restOnMeal}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing