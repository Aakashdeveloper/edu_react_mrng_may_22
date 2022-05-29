import React,{Component} from 'react';
import './Search.css';

class Search extends Component {
    render(){
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
                        <select>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                        </select>
                        <select id="restaurants">
                            <option>Ama Cafe</option>
                            <option>Wow Momos</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default Search