import { Button, Grid } from '@material-ui/core';
import React from 'react';
import productService from '../../services/ProductService';
const SinglePreoduct = ({product}) => {
    return ( <Grid item xs ={4}>
        <h1>NAME : {product.name}
            <Button variant="contained" color="primary">Edit</Button>
            <Button variant="contained" color="secondary" onClick={e => {
                productService
                    .deleteProduct(product._id)
                    .then((data) => { console.log(data) })
                    .catch((err) => {
                        console.log(err);
                    }); 
            }}>Delete</Button></h1>
        <p> Price : {product.price}</p>
        <hr />
    </Grid> );
}
 
export default SinglePreoduct;