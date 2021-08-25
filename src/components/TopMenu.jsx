import React from 'react';

import { Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import { Button ,AppBar, Toolbar,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
  link: {
    color:"white",
    padding:"1rem"
  },
}));
const TopMenu = () => {
    
const classes= useStyles();
    return (
       <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" >
<Link to="/"className={classes.link}> HOme</Link>
         
          </Typography>
           <Typography variant="h6" >
<Link to="/products"className={classes.link}> Products</Link>
         
          </Typography>
                     <Typography variant="h6" >
<Link to="/contact-us"className={classes.link}> Contact us</Link>
         
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      );
}
 
export default TopMenu;

 // <div>
        //     <ul>
        //         <li style={{display:"inline", padding:"2em"}}>
        //             <Link to="/">Home</Link>

        //         </li>

                
        //         <li style={{display:"inline", padding:"2em"}}>
        //             <Link to="/products">Products</Link>
                    
        //         </li>
        //         <li style={{display:"inline", padding:"2em"}}>
        //             <Link to="/contact-us">Contact Us</Link>    
        //         </li>

        //         <li style={{display:"inline", padding:"2em"}}>
        //             <Link to="/login">Login</Link>

        //         </li>   
                
        //         <li style={{display:"inline", padding:"2em"}}>
        //           <Button variant="contained" color="primary">SignUp</Button>

        //         </li>   
        //     </ul> 
        //     </div>