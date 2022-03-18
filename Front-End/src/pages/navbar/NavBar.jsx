import React from "react";
import { Component } from "react/cjs/react.development";
import './NavBar.css';
import { Link } from "react-router-dom";
class NavBar extends Component{
    render(){
        return(
          <div className="container">
          <nav className=" navbar  navbar-expand-lg ">
            <div className="container">
              <Link to="/" className="navbar-brand"  >
              <a className="NavBarRes">Agência/Pectros</a>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler" id="menu">menu</span>
              </button>
        
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mx-auto"></div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                      <a className="Ancoras">Home</a>
                </Link>
                   
                  </li>
                  <li className="nav-item">
                  <Link to="/Promocoes" className="nav-link text-white">
                      <a   className="Ancoras">Promoções</a>
                  </Link>
                    
                  </li>
          
                  <li className="nav-item">
                 <Link to="/Cadastro" className="nav-link text-white">
                      <a className="Ancoras">Cadastrar</a>
                 </Link>
                   
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
        );
    }
}
export default NavBar;