import React,{ Component } from 'react';
import logo from '../logo.svg';

class ProductListing extends Component{

        fullWidth(){
        	return {"width":"auto"}
        }

         render() {
    
                 return(
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
	                    <div className="card">
						  <img className="img-responsive" src={logo} alt="Avatar" style={this.fullWidth()}></img>
							  <div className="card_container text-center">
							    <h4><b>John Doe -<i className="fa fa-inr fa-fw" aria-hidden="true"></i>180 </b></h4> 
							    <div>
							    <button className="btn btn-info cart_button_margin"><i className="fa fa-shopping-cart"></i> Cart</button>
							    <button className="btn btn-info cart_button_margin"><i className="fa fa-heart"></i> Whishlist</button>
							    </div>
							  </div>
						</div>
                    </div>
                 	);

         }

}

export default ProductListing;