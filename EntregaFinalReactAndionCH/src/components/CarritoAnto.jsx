import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CartContext';

export const CarritoAnto = () => {
    const { getItemQuantity } = useCarritoContext();

    return (
        <div className="nav-item">
            <Link to={'/cart'} className="nav-link">
                <button className="btn btn-outline-primary">
                    <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/carrito.png.png?alt=media&token=ae357e56-a86e-40d6-8f79-b6ee77767464" alt="Cart" className="me-2" width={45} />
                    <span style={{
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '2px 5px', 
                        lineHeight: '1', 
                    }}>
                        ({getItemQuantity()})
                    </span>
                </button>
            </Link>
        </div>
    );
};