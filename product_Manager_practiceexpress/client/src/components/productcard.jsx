import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>price: ₹{product.price}</p>
      <p>stock: {product.stock}</p>
    </div>
  )
}

export default ProductCard