import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  {ItemDetail} from "./ItemDetail"
import { getProduct } from "../firebase/firebase.js"


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        getProduct(pid)
            .then(prod => setItem(prod))
            .catch(error => console.log(error))
    }, [])
    return (
        <div >
            <ItemDetail item={item} />
        </div>
    )
}