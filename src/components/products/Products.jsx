import React from 'react';
import axios from "axios";
import SingleProduct from "./SingleProduct"
const Products = () => {
    const [products, setProducts]=React.useState([]);
    const getData = () =>{
        axios.get("http:/localhost:4000/api/products").then((res)=>{
            
        })
    }
    return ( <div>
        <h1>Products</h1>
        {/* <SingleProduct product={products[0]}/>
        <SingleProduct product={products[1]}/> */}
        {products.length == 0?(<p>there are no Products</p>):(<div>{products.map((product,index ) =>    <SingleProduct key={index} product={product}/>
            
        )}</div> )}
        
    </div> );
}
 
export default Products;