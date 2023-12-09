const express = require("express");
const sequelize = require('./database')
const User = require('./User')


sequelize.sync().then(() => console.log('db is ready'))

const app = express();

app.use(express.json())

app.post('/users', async(req,res) =>{
  try {
    await User.create(req.body)
    res.send("User was created")
  } catch (error) {
    res.send(error)
  }
})
app.get('/users', async(req,res) =>{
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    res.send("There was an error")
  }
})

app.listen(3000, () => {
  console.log("app is running");
});
