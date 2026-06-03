import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();
        const product = { name, price, stock }
        fetch('https://localhost:300/products', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(product)
        })

        return (
            <>
                <div>AddProduct</div>
                <form onSubmit={handlesubmit}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                    <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
                    <button type="submit" onclick={handlesubmit}>Add Product</button>
                </form>
            </>

        )
    }

    export default AddProduct