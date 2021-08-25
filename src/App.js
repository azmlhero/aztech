import React  from 'react';
import {BrowserRouter as Router, Switch , Route, Redirect} from "react-router-dom";
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import Notfound from './components/NotFound';
import Products from './components/products/Products';
import TopMenu from "./components/TopMenu";



function App() {
  return (
    <Router>
    <div  style={{padding:"10px"}}>
      
        <TopMenu/>
        <Switch>

              <Route exact path ="/products" component={Products}/>
              <Route path ="/contact-us" component={ContactUs}/>
              <Route path ="/login" component ={LogIn}/>
              <Route   path  ="/not-found" component={Notfound}/>     
              <Route   path  ="/" exact component={LandingPage}/>   
              <Redirect to  ="/not-found" />   

        </Switch>

    </div>
    </Router>
  );
}

export default App;
