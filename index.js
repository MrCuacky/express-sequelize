const express = require("express");
const sequelize = require('./database')
const Hero = require('./Hero')
const Start = require('./Start')
const Aboutus = require('./Aboutus')
const Product = require('./Product')
const cors = require('cors')


sequelize.sync().then(() => console.log('db is ready'))

const app = express();

app.use(express.json())
app.use(cors())

app.post('/hero', async(req,res) =>{
  try {
    await Hero.create(req.body)
    res.send("Hero created")
  } catch (error) {
    res.send(error)
  }
})
app.get('/hero', async(req,res) =>{
  try {
    const hero = await Hero.findAll()
    res.send(hero)
  } catch (error) {
    res.send("There was an error")
  }
})


app.post('/start', async(req,res) =>{
  try {
    await Start.create(req.body)
    res.send("Start created")
  } catch (error) {
    res.send(error)
  }
})
app.get('/start', async(req,res) =>{
  try {
    const start = await Start.findAll()
    res.send(start)
  } catch (error) {
    res.send("There was an error")
  }
})


app.post('/aboutus', async(req,res) =>{
  try {
    await Aboutus.create(req.body)
    res.send("About us created")
  } catch (error) {
    res.send(error)
  }
})
app.get('/aboutus', async(req,res) =>{
  try {
    const aboutus = await Aboutus.findAll()
    res.send(aboutus)
  } catch (error) {
    res.send("There was an error")
  }
})


app.post('/product', async(req,res) =>{
  try {
    await Product.create(req.body)
    res.send("About us created")
  } catch (error) {
    res.send(error)
  }
})
app.get('/product', async(req,res) =>{
  try {
    const product = await Product.findAll()
    res.send(product)
  } catch (error) {
    res.send("There was an error")
  }
})


app.listen(3000, () => {
  console.log("app is running");
});
