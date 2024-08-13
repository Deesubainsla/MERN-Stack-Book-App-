import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import bookroute from './routes/Books.route.js'
import userroute from './routes/User.route.js'
import cors from 'cors'


const app = express()
const port = process.env.PORT || 4000

//code for db connection
const dbconnect = async()=>{
    try {
        const connection = await mongoose.connect(`${process.env.DB_URL}`
        //   ,{
        //     useNewUrlParser: true, //both used for use latest mongo features
        //     useUnifiedTopology: true
        // }
      )
        console.log("connected successfully:")
        
    } catch (error) {
        console.log("Error: error in db connection")
    }
}
dbconnect();

app.use(cors())
app.use(express.json());//important for parse data and provide it to req.body

//the below one is same as express.json() but for form action post
// app.use(express.urlencoded({ extended: true }));



app.use('/books', bookroute )
app.use('/user', userroute)

app.get('/', (req, res) => {
  res.send('Trying express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})