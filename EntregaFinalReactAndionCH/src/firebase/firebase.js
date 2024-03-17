import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfxklU_8Ur8q0lSY78s5fuDM1lqJ36y8I",
    authDomain: "coderhouse-reactandion.firebaseapp.com",
    projectId: "coderhouse-reactandion",
    storageBucket: "coderhouse-reactandion.appspot.com",
    messagingSenderId: "631000681019",
    appId: "1:631000681019:web:0dce900e4f59948131aa1e"
  };

const app = initializeApp(firebaseConfig);
const bdd = getFirestore(app); 

const prods = [
    {
        "id": 1,
        "title": "MicroCollection1",
        "price": 200,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/1.jpeg?alt=media&token=1df1d707-6217-4c7c-b6ac-11096d7ec45c",
        "category": "Coleccion1"
    },
    {
        "id": 2,
        "title": "MicroCollection1",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/2.jpeg?alt=media&token=dc0a5285-575a-4130-b7c1-1fce8ce66f9b",
        "category": "Coleccion1"
    },
    {
        "id": 3,
        "title": "MicroCollection1",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/3.jpeg?alt=media&token=c4facf6d-ea8d-4013-9494-8c521b0df7ce",
        "category": "Coleccion1"
    },
    {
        "id": 4,
        "title": "MicroCollection1",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/4.jpeg?alt=media&token=2bcab6da-21d4-4d49-9be1-dcefd7ee11c3",
        "category": "Coleccion1"
    },
    {
        "id": 5,
        "title": "MicroCollection1",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/5.jpeg?alt=media&token=e31c0109-ff62-46c8-b82f-427714a64534",
        "category": "Coleccion1"
    },
    {
        "id": 111,
        "title": "MicroCollection2",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/111.jpeg?alt=media&token=5dc9337e-79be-4333-a8de-e79662073287",
        "category": "Coleccion2"
    },
    {
        "id": 112,
        "title": "MicroCollection2",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/112.jpeg?alt=media&token=932bcfff-3008-43e7-a4be-ee2d82cc26a5",
        "category": "Coleccion2"
    },
    {
        "id": 113,
        "title": "MicroCollection2",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/113.jpeg?alt=media&token=e284d4ea-850f-47f0-877c-f88185d3d71c",
        "category": "Coleccion2"
    },
    {
        "id": 114,
        "title": "MicroCollection2",
        "price": 100,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/coderhouse-reactandion.appspot.com/o/114.jpeg?alt=media&token=8b85cee4-d081-42ae-b2ae-0a27cdc59087",
        "category": "Coleccion2"
    }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}


export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}
