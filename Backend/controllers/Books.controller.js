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

export const addBook = async(req, res)=>{

    try {
        const {title, image, description, price, category} = req.body;
    
        const newBook = new Book({
            title,
            image,
            description,
            price, 
            category
        })
    
        await newBook.save();
        res.status(200).json({message:"New Book added successfully"})
    } catch (error) {
        res.status(401).json({message:"Issue in adding new Book"})
    }
}