import { Cart } from "../models/Cart.model.js";

export const addingtoCart = async(req, res)=>{
   try {
     const {userid, bookid} = req.body;
     const cart = await Cart.findOne({user:userid});
     if(!cart){
        return res.status(404).json({message:'Cart is not found'})
     }
     if(cart.items.includes(bookid)){
         return res.status(400).json({message:"Book already present"});
     }
 
     cart.items.push(bookid);
     await cart.save();
     res.status(200).json({message:"Book added successfully"});
   } catch (error) {
     res.status(500).json({message:"Something went wrong in addingCart"})
   }
} 