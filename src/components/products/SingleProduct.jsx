import { Grid } from '@material-ui/core';
import React from 'react';
const SinglePreoduct = ({product}) => {
    return ( <Grid item xs ={4}>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <hr />
    </Grid> );
}
 
export default SinglePreoduct;