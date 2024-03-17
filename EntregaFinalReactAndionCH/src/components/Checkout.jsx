import { useRef } from "react";
import { useCarritoContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js";

export const Checkout = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current);
        const cliente = Object.fromEntries(datForm);


        const promises = carrito.map(prodCarrito => {
            return getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity;
                    updateProduct(prodBDD.id, prodBDD);
                } else {
                    toast.info(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    });
                    return null;
                }
            });
        });

        Promise.all(promises.filter(Boolean)).then(() => {

            const aux2 = carrito.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }));

            createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
                .then(ordenCompra => {
                    toast.success(`Gracias por su compra, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    });

                    emptyCart();
                    e.target.reset();
                    navigate('/');
                })
                .catch(e => {
                    toast.error(`Error al generar orden de compra: ${e}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    });
                });
        });
    };

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className="btn btn-primary">
                                Volver al inicio
                            </button>
                        </Link>

                    </>
                    :
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mt-2">
                                <div className="bg-light rounded-md shadow p-4">
                                    <form ref={formRef} onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="nombre" className="form-label">Nombre:</label>
                                            <input type="text" className="form-control" id="nombre" name="nombre" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="apellido" className="form-label">Apellido:</label>
                                            <input type="text" className="form-control" id="apellido" name="apellido" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="direccion" className="form-label">Dirección:</label>
                                            <input type="text" className="form-control" id="direccion" name="direccion" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <input type="email" className="form-control" id="email" name="email" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="telefono" className="form-label">Teléfono:</label>
                                            <input type="tel" className="form-control" id="telefono" name="telefono" />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Finalizar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>

    );
};