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
    <>
      <div>product</div>
      {products.map(p => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>price: ₹{p.price}</p>
          <p>stock: {p.stock}</p>
        </div>
      ))}
    </>
  )
}

export default Product
