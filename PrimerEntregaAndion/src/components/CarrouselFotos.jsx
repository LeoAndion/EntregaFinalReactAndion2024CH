import React from 'react';
import canto from '../assets/Imagenes/AntoCantando2.jpg';
import teatro from '../assets/Imagenes/AntoTeatro.webp';
import foto from '../assets/Imagenes/AntoFoto2.jpg';

export const CarouselFotos = () => {
    return (
        <div id="carouselExample" className="carousel slide active bg-dark">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <img src={foto} className="mx-auto d-block w-100 c-img" alt="Reel1" style={imgEstilo}/>
          </div>
          <div className="carousel-item">

            <img src={teatro} className="mx-auto d-block w-100 c-img" alt="Reel2" style={imgEstilo}/>
          </div>
          <div className="carousel-item">

            <img src={canto} className="mx-auto d-block w-100 c-img" alt="Reel3"style={imgEstilo}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      
       
      </div>
    

      
        
    );
};

const imgEstilo = {
    objectFit: 'scale-down', 
    objectPosition: 'center', 
    padding: '6px', 
    maxWidth: '90vh', 
    width: '500px', 
    height: '500px', 
   



};

