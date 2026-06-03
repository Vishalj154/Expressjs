import React from 'react'
import {useState, useEffect} from 'react'

const Product = () => {
  const [products,setproducts]= useState([]);
  useEffect(() => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setproducts(data.products))
}, [])
  return (
    
    <div>product</div>
  )
}

export default Product
