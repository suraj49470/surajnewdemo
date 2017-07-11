import React , { Component } from 'react';
import ProductListing from './ProductListing';

class Container extends Component{


     render(){

           return(
                     <div className="container">
                         <ProductListing/>
                         <ProductListing/>
                         <ProductListing/>
                         <ProductListing/>
                     </div>
                   
           	);

     }


}

export default Container;