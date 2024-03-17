import { Link } from "react-router-dom";
import { useCounter } from "../assets/Hooks/contador";
import { useCarritoContext } from "../context/CartContext"
import { toast } from "react-toastify"

export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1);
    
   

    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado al carrito correctamente`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Precio: ${item.price}</p>
                                    <p className="card-text">Stock: {item.stock}</p>
                                    <p className="card-text">Categoria: {item.category}</p>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-outline-primary me-2" onClick={decrement}>-</button>
                                        <span>{count}</span>
                                        <button className="btn btn-outline-primary ms-2" onClick={increment}>+</button>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-outline-danger me-2" onClick={reset}>Reset</button>
                                        <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="card-img" src={`${item.img}`} alt={`Imagen de ${item.title}`} style={imgEstilo} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to={'/'}>
                                <button className="btn btn-outline-secondary w-100">Cerrar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const imgEstilo = {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover'
};