const express= require('express')
const dotenv=require('dotenv')
const userroutes= require("./routes/userroutes")
const connectDB= require("./config/database")


dotenv.config()
const app= express()
const PORT=process.env.PORT||5000


connectDB()
app.use(express.json())

app.use(`/api/users`, userroutes)


app.listen(PORT, ()=>{console.log(`running on http://localhost:${PORT}`)})