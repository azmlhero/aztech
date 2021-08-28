import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
const NewProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    
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
                axios.post("http://localhost:3000/products", { name, price })
                    .then(res => { console.log(res.data) })
                    .catch(  (err) => {console.log(err)})
            }}> Add New </Button>
                
                </Grid>
                 </Grid>


     );
}
 
export default NewProduct;