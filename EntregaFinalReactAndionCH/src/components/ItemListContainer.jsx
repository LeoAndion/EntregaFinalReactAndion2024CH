import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList} from "./ProductoList"
import { getProducts } from "../firebase/firebase.js"


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        getProducts()
           
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(prods)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div className="container">
    <div className="row justify-content-center">
        <div className="col-12">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <ItemList products={products} plantilla="Item" />
            </div>
        </div>
    </div>
</div>
    )
}