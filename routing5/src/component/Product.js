import React from 'react';
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div className="panel panel-success">
                <div className="panel-heading">
                Product Page
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <h2>Product</h2>
                        <p>
                            Product Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <h2>Mobile</h2>
                    <Link to="/products/Mobile?page=1" className="btn btn-primary">Details</Link>
                    <h2>Cloths</h2>
                    <Link to="/products/Cloths?page=2" className="btn btn-success">Details</Link>
                    <h2>Footerwares</h2>
                    <Link to="/products/Footerwares?page=3" className="btn btn-danger">Details</Link>
                </div>
            </div>
        </>
        
    )
}

export default Product