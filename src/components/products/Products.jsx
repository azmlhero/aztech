import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SingleProduct from "./SingleProduct"
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  addBtn:{
        position: "absolute",
        bottom: theme.spacing(2),
         right: theme.spacing(2)
  },
}));

const Products = (props) => {

    const classes = useStyles();
    const [products, setProducts]=React.useState([]);
    const getData = () => {
        axios.get("http://localhost:3000/api/products").then((res) => {
            setProducts(res.data)

        }).catch(err => {
            console.log(err);
        });
    };
//    getData();
    React.useEffect(getData,[])
    // console.log("inside products components")
    
    const handleNewProductClick = () => {
        console.log(props);
        props.history.push("/products/new");
}
    return (<div>
        <h1>Products</h1>
        <Fab color="primary" aria-label="add" className={classes.addBtn}  onClick={handleNewProductClick}>
        <AddIcon />
      </Fab>
         {/* <SingleProduct product={products[0]}/>
        <SingleProduct product={products[1]}/> */}
        {products.length == 0 ? (<p>there are no Products</p>):(<Grid container spacing={3}>{products.map((product,index ) =>    <SingleProduct key={index} product={product}/>
            
        )}</Grid> )}
        
    </div> );
}
 
export default Products;