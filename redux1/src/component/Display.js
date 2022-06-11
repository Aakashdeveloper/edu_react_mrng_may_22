import React from 'react';

const Display = (props) => {

    const displayName = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            <h3>Movies</h3>
            {displayName(props)}
        </div>
    )
}

export default Display;