import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json'


class Home extends Component {

    constructor(){
        super()

        this.state={
            productData:JSON
        }

    }

    render(){
        return (
            <>
                <Header/>
                <ProductDisplay prodData={this.state.productData}/>
                <Footer year="2022" month="may"/>
            </>
        )
    }
    
}

export default Home
