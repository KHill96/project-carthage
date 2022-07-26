import dbConnect from "../../../lib/db"
import Book from "../../../models/book"


export default async function handler(req,res) {
  const {method} = req

  await dbConnect()

  switch (method){
    case 'GET':
      try {
        const books = await Book.find({}).sort({total_downloads:-1});
        res.status(200).json ({success: true,data: books})
      }catch(error){
        res.status(400).json({success:false})
      }
      break
    default:
      res.status(400).json({success:false})
      break
  }


};