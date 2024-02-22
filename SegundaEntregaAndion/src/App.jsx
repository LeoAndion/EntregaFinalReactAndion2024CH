import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { CarouselFotos } from './components/CarrouselFotos'
import { ItemDetailsContainer } from './components/DetalleProductoContainer'
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route
      path='/'
      element={
        <> <ItemListContainer /> 
        <CarouselFotos /> </>}/>
        <Route path='/category/:cid' element={<ItemListContainer />} />
        <Route path='/product/:pid' element={<ItemDetailsContainer />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      
      <Footer />
      
    </BrowserRouter>

  )
}