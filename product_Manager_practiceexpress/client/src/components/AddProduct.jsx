import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const product = { name, price, stock }
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Product added!', data)
      // clear form after submit
      setName('')
      setPrice('')
      setStock('')
    })
  }

  return (        // ← outside handleSubmit!
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <input placeholder="Stock" type="number" value={stock} onChange={e => setStock(e.target.value)} />
        <button type="submit">Add Product</button>
      </form>
    </>
  )
}
export default AddProduct