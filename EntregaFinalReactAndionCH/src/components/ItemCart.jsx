import { useCarritoContext } from "../context/CartContext.jsx";
import { useCounter } from "../assets/Hooks/contador.jsx";

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext();
    const { count, increment, decrement } = useCounter(
        product.quantity,
        product.stock,
        1
    );

    return (
        <div className="card mb-3 border-dark">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={`${product.img}`}
                        alt={`Imagen de ${product.title}`}
                        className="w-100 h-auto"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {product.title} {product.size}
                        </h5>
                        <div className="btn-group" role="group">
                            <button
                                className="btn btn-secondary"
                                onClick={async () => {
                                    updateItem(product.id, count - 1);
                                    decrement();
                                }}
                            >
                                -
                            </button>
                            <span className="btn btn-outline-secondary">
                                {count}
                            </span>
                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    updateItem(product.id, count + 1);
                                    increment();
                                }}
                            >
                                +
                            </button>
                        </div>
                        <p className="card-text">
                            Subtotal: ${product.price * count}
                        </p>
                        <button
                            className="btn btn-danger"
                            onClick={() => removeItem(product.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};