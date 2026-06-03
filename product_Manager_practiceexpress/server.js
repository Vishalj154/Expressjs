const express = require('express')                
const path = require('path') 
const app = express()
const cors = require('cors')    
app.use(cors()) 

// ── Middleware ──
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())

// ── Data ──
let products = [
  { id: 1, name: 'Camera', price: 10000, stock: 10 },
  { id: 2, name: 'Laptop', price: 55000, stock: 5  },
]

// ── Routes ──

// HOME - renders EJS page
app.get('/', (req, res) => {
  res.render('products', { title: 'Product Inventory', products })
})

// GET all products + search filter
app.get('/products', (req, res) => {
  const { search } = req.query
  let result = search
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : products
  res.json({ products: result })
})

// GET single product by id
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)
  if (!product) {
    return res.status(404).json({ error: `Product with id ${id} not found` })
  }
  res.json({ product })
})

// POST - add new product
app.post('/products', (req, res) => {
  const { name, price, stock } = req.body
  const newProduct = { id: products.length + 1, name, price, stock }
  products.push(newProduct)
  res.status(201).json(newProduct)
})

// PUT - update product
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)
  if (!product) {
    return res.status(404).json({ error: `Product with id ${id} not found` })
  }
  const { name, price, stock } = req.body
  product.name = name
  product.price = price
  product.stock = stock
  res.json({ product })
})

// DELETE - remove product
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = products.findIndex(p => p.id === id)
  if (index === -1) {
    return res.status(404).json({ error: `Product with id ${id} not found` })
  }
  products.splice(index, 1)
  res.json({ message: `Product ${id} deleted successfully` })
})

// ── Start Server ──
const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})