import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    return (
        <>
            <div>AddProduct</div>
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
                <button type="submit">Add Product</button>
            </form>
        </>

    )
}

export default AddProduct