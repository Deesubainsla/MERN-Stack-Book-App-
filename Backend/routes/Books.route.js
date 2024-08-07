import express from 'express'
import { getBook } from '../controllers/Books.controller.js';

const router = express.Router();

router.get('/', getBook)


//they are diffrent endpoint working after /books
// router.get('/hello', (req,res)=>{
//     res.send("hello trying something new")
// })
// router.get('/hey', (req,res)=>{
//     res.send("hey again new")
// })

export default router
