import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components';
import style from "./style.css";


export default class Navbar extends Component {
	render() {
		return (
		    <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
                  <Link to="/details">
                   <button className="button">
                     <spam className="mr-2">
                        <i className="fa fa-phone" />
                     </spam>
                     About
                   </button>
                  </Link>
               <ul className="navbar-nav align-items-center">
             	<li className="nav-item ml-5">
                   <Link to="/" className="nav-link">
                        Home
                   </Link>
             	</li>
               </ul>
               <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                   <Link to="/product" className="nav-link">
                        Shop
                   </Link>
                  </li>
               </ul>
               
             	<Link to="/cart" className="ml-auto">
             	    <button className="button">
             		<spam className="mr-2">
             		  <i className="fa fa-cart-plus" />	
             		</spam>
             		My Cart
             	    </button>
             	</Link>
			</nav>
		);
	}
}
