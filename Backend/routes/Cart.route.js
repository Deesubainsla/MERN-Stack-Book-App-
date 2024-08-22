import express from 'express'
import { addingtoCart } from '../controllers/Cart.controller.js';

const router = express.Router();

router.post('/', addingtoCart)

export default router 