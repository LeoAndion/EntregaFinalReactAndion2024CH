import React from 'react';


const CarritoAnto = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={"https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"} alt="Carrito" width={60}/>
            <span style={{
                position: 'absolute',
                top: '0',
                right: '-10px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 5px',
                fontSize: '10px'
            }}>
                {17}
            </span>
        </div>
    );
};

export default CarritoAnto;