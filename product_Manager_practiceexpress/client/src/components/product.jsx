import React from 'react'
import {useState, useEffect} from 'react'
import productcard from './productcard'

const Product = () => {
  const [products,setproducts]= useState([]);
  useEffect(() => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setproducts(data.products))
}, [])
  return (
    <>
      
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
      
    </>
  )
}

export default Product
