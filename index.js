const express = require("express");
const sequelize = require('./database')
const User = require('./User')
const cors = require('cors')


sequelize.sync().then(() => console.log('db is ready'))

const app = express();

app.use(express.json())
app.use(cors())


app.post('/user', async(req,res) =>{
  try {
    await User.create(req.body)
    res.send("User created")
  } catch (error) {
    res.send(error)
  }
})
app.get('/user', async(req,res) =>{
  try {
    const contact = await User.findAll()
    res.send(contact)
  } catch (error) {
    res.send("There was an error")
  }
})


app.listen(3001, () => {
  console.log("app is running");
});
