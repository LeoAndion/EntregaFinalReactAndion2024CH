import React from 'react';


export const CarouselFotos = () => {
    return (
        <div id="carouselExample" className="carousel slide active bg-dark">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/AntoFoto2.jpg?alt=media&token=659d997f-625e-4d49-b3a6-790e654ac7a6" className="mx-auto d-block w-100 c-img" alt="Reel1" style={imgEstilo}/>
          </div>
          <div className="carousel-item">

            <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/AntoTeatro.webp?alt=media&token=d67d7c26-e723-4633-b9bc-4f5ec65b62fc" className="mx-auto d-block w-100 c-img" alt="Reel2" style={imgEstilo}/>
          </div>
          <div className="carousel-item">

            <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/AntoCantando2.jpg?alt=media&token=63cf731a-7456-4fbf-b53c-93ea8245d059" className="mx-auto d-block w-100 c-img" alt="Reel3"style={imgEstilo}/>
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

