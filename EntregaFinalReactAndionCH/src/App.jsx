import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { CarouselFotos } from './components/CarrouselFotos'
import { ItemDetailsContainer } from './components/DetalleProductoContainer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { CarritoProvider } from './context/CartContext.jsx'
import { Cart } from './components/Cart.jsx'
import { Checkout } from './components/Checkout.jsx'

export const App = () => {
  return (
    <BrowserRouter>
     <CarritoProvider>
      <Navbar />
      <ToastContainer />
      <Routes>
      <Route
      path='/'
      element={
        <> <ItemListContainer /> 
        <CarouselFotos /> </> }/>
        <Route path='/category/:cid' element={<ItemListContainer />} />
        <Route path='/product/:pid' element={<ItemDetailsContainer />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        
      </Routes>
      
      <Footer />
      </CarritoProvider>
    </BrowserRouter>

  )
}