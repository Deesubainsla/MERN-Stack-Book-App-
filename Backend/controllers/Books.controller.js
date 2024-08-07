import { Book } from "../models/Book.model.js"

export const getBook = async(req,res)=>{
    try {
        const books = await Book.find();
        if(!books) return res.status(404)

        res.status(200).json(books)
    } catch (error) {
        console.log("Error in fetching books:",error?.message)
    }
}