import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React,{useHistory} from 'react';
import productService from '../../services/ProductService';
const NewProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    // const history = React.useHistory("");
    return (
        <Grid container spacing={3}>
            <Grid item xs ={12}>
                <h1>Add new Product</h1></Grid>
            <Grid item xs={3}>{name}</Grid>
                <Grid item xs={6}>
                <TextField label="name" fullWidth value={name} onChange = {(e) => setName(e.target.value)} />
                <TextField label="price" fullWidth value={price} onChange = {(e) => setPrice(e.target.value)} />
                </Grid>
                <Grid item xs={3}></Grid>
            <Grid item xs={3}> {price}</Grid>
                               
            <Grid item xs={9}>  <Button variant="contained" color="primary" onClick={(e) => {
                console.log("Send api call to ADD");
   
               productService.addProduct( { name, price })
                    .then((data) => {
                        console.log(data);
                        props.history.push("/products");
                    })
                    .catch((err) => { console.log(err) });
                
            }}> Add New </Button>
                
                </Grid>
                 </Grid>


     );
}
 
export default NewProduct;