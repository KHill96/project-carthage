import dbConnect from "../../../lib/db"
import Book from "../../../models/book"


export default async function handler(req,res) {
  const {method} = req

  await dbConnect()

  switch (method){
    case 'GET':
      try {
        var books = null;
        if (req.query.limit){
          // Get limit
          if (req.query.sort){
            // Popular
            if(req.query.sort === 'popular'){
              books = await Book.find().sort({total_downloads:-1}).limit(req.query.limit);
            }
            // Recent
            else if(req.query.sort === 'recent'){
              books = await Book.find().sort({date:-1}).limit(req.query.limit);
            }
            // Otherwise
            else{
              books = await Book.find().limit(req.query.limit)
            }
          }
        }
        else{
          if(req.query.sort === 'popular'){
            books = await Book.find().sort({total_downloads:-1});
          }
          // Recent
          else if(req.query.sort === 'recent'){
            books = await Book.find().sort({date:-1});
          }
          // Otherwise
          else{
            books = await Book.find();
          }
        }
        // const recentBooks = await Book.find().sort({total_downloads:-1});
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
