import React, { Component } from 'react';

class Header extends Component{
	 
	 render() {
         return(
                 <nav className="navbar navbar-inverse no-border navbar-small-bottom-margin">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="javascript:void(0);myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span> 
				      </button>
				      <a className="navbar-brand" href="javascript:void(0);">WebSiteName</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li className=""><a href="javascript:void(0);">Home</a></li>
				        <li><a href="javascript:void(0);">Page 1</a></li>
				        <li><a href="javascript:void(0);">Page 2</a></li> 
				        <li><a href="javascript:void(0);">Page 3</a></li> 
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="javascript:void(0);"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
				        <li><a href="javascript:void(0);"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
        	);

	}

}

export default Header;