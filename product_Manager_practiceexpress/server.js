const express = require('express')
const app = express()
app.set("view engine","ejs")
app.set("views","views")

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
app.put('/products/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const product=products.find(p=>p.id==id)
  if (!product) {
  return res.status(404).json({ error: `Product with id ${id} not found` })
}
 const {name,price,stock}=req.body
 product.name=name
 product.price=price
 product.stock=stock
 res.json({product:product})

})
app.get('/', (req, res) => {
  res.render("products",{title:'Product Inventory'});
});
app.delete('/products/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const index=products.findIndex(p=>p.id==id)
  if(index== -1){
    return res.status(404).json({error:`Product with id ${id} not found`})
  }
  products.splice(index,1)
  res.json({message:`product with ${id} deleted successfully`})
})
app.get('/products',(req,res)=>{
  const category=req.query.category
  const {search}=req.query
  // if search exists, filter — if not, return all
  let result=search ? products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase())) : products
  res.json({products:result})
})