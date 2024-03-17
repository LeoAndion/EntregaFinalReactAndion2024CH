import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
    return (
        <div className="card bg-gray-200 p-3 rounded-md shadow-md">
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <img className="card-img-top" src={`${product.img}`} alt={`Imagen de ${product.title}`} style={imgEstilo} />
                <div className="card-body text-center">
                    <h2 className="card-title text-lg font-bold mb-2">{product.title} {product.description}</h2>
                    <p className="card-text text-gray-700 mb-2 font-weight-bold">Precio: ${product.price}</p>
                    <p className="card-text text-gray-700 mb-2 font-weight-bold">Stock: {product.stock}</p>
                    <p className="card-text text-gray-700 mb-2 font-weight-bold">Categoria: {product.category}</p>
                    <button className="btn btn-success">COMPRAR</button>
                </div>
            </Link>
        </div>
    )
}

const imgEstilo = {
    maxWidth: '80%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block', 
    margin: 'auto' 
};
