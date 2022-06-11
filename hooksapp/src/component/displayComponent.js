import React from 'react';

const DisplayComponent = (props) => {

    const renderCity = ({mycity}) => {
        if(mycity){
            return mycity.map((item) => {
                return(
                    <div key={item.state_id}>
                        {item.state}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>City List</h2>
                {renderCity(props)}
            </center>
        </div>
    )
}

export default DisplayComponent