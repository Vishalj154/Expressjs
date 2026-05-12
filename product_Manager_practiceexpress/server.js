const express = require('express')
const app = express()

app.use(express.json())

const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send("Welcome to Product Inventory!")
})

let products = [
  { id: 1, name: 'Camera', price: 10000, stock: 10 },
  { id: 2, name: 'Laptop', price: 55000, stock: 5  },
]
app.get('/products', (req, res) => {
  res.json({products: products})
})
app.get('/products/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const product=products.find(p=>p.id==id)
  if(!product){
    return res.status(404).json({error:`Product with id ${id} not found`})
  }
  res.json({product: product})
})
app.post('/products',(req,res)=>{
  const {name,price,stock}=req.body
  const newproduct={id:products.length+1,name,price,stock}
  products.push(newproduct)
  res.status(201).json(newproduct)
})
  