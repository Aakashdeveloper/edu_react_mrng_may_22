import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
class Search extends Component {
   
    constructor(){
        super()
        //console.log(">>>>inside constructor")
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.restaurant_id} key={item._id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleState = (event) => {
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({restaurants:data})
        })
    }

    render(){
        //console.log(">>>>inside render")
        return(
            <>
               <div id="search">
                    <div id="logo">
                        <span>D!</span>
                    </div>
                    <div id="heading">
                        Search Place Near To You
                    </div>
                    <div id="dropdown">
                        <select onChange={this.handleState}>
                            <option value="default">---SELECT CITY---</option>
                            {this.renderCity(this.state.location)}  
                        </select>
                        <select id="restaurants">
                           <option value="default">---SELECT RESTAURANTS---</option>
                           {this.renderRestaurants(this.state.restaurants)}
                        </select>
                    </div>
                </div>
            </>
        )
    }
    //calling Api on page load 
    componentDidMount(){
        //console.log(">>>>inside componentDidMount")
        fetch(url, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        //return the data
        .then((data) => {
            //console.log(data)
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })

    }
}

export default Search