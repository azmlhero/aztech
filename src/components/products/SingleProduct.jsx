import React from 'react';
const SinglePreoduct = ({product}) => {
    return ( <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
    </div> );
}
 
export default SinglePreoduct;