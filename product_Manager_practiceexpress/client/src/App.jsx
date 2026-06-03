import './App.css'
import Navbar from './components/Navbar';
import Home from './components/home';
import Product from './components/product';
import {Routes, Route}  from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar/>
     <h1>Product Inventory</h1>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
     </Routes>
    </>
  )
}

export default App
