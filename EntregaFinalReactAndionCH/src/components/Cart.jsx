import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ProductoList";

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            {carrito.length === 0 ? (
                                <>
                                    <h1 className="text-center">Carrito Vacío</h1>
                                    <div className="text-center mt-4">
                                        <Link to={'/'} className="btn btn-primary">
                                            Volver al inicio
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <ItemList products={carrito} plantilla="ItemCart" />
                                    <div className="text-center mt-4">
                                        <p className="mb-3">Resumen de la compra: $ {totalPrice()}</p>
                                        <button className="btn btn-danger me-3" onClick={emptyCart}>
                                            Vaciar Carrito
                                        </button>
                                        <Link to={'/'} className="btn btn-secondary me-3">
                                            Continuar Comprando
                                        </Link>
                                        <Link to={'/checkout'} className="btn btn-success">
                                            Finalizar compra
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};