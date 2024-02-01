import React from 'react';
import canto from '../assets/Imagenes/AntoCantando2.jpg';
import teatro from '../assets/Imagenes/AntoTeatro.webp';
import foto from '../assets/Imagenes/AntoFoto2.jpg';

const ItemListContainer = () => {
    return (
        <div id="carouselExample" class="carousel slide active bg-dark">
        <div class="carousel-inner">
          <div class="carousel-item active">

            <img src={foto} class="mx-auto d-block w-100 c-img" alt="Reel1" style={imgEstilo}/>
          </div>
          <div class="carousel-item">

            <img src={teatro} class="mx-auto d-block w-100 c-img" alt="Reel2" style={imgEstilo}/>
          </div>
          <div class="carousel-item">

            <img src={canto} class="mx-auto d-block w-100 c-img" alt="Reel3"style={imgEstilo}/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
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

export default ItemListContainer;