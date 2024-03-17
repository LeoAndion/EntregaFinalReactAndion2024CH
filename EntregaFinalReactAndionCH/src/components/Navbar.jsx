import React from "react";
import { CarritoAnto } from "./CarritoAnto";
import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Logo Anto</a>
          <div>
                   
                    <a href="https://www.facebook.com/antonella.delpiano.758/"><img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png" alt="Facebook" width={45}/></a>
                    <a href="https://www.linkedin.com/in/antonelladelpiano/"><img src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png" alt="Linkedin" width={50}/></a>
                    <a href="https://www.instagram.com/delpiano.antonella/"><img src="https://cdn-icons-png.flaticon.com/512/2175/2175198.png" alt="Instagram" width={45}/></a>
                </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            <Link to="/category/Coleccion1" className="nav-link">Producto1</Link>
            <Link to="/category/Coleccion2" className="nav-link">Producto2</Link>
            </div>
          </div>
         
        
          <div> <CarritoAnto/> </div>
          

          
          </div>
          
        
      </nav>
    );
} 

