import dbConnect from "../../../../lib/db"
import Book from "../../../../models/book"


export default async function handler(req,res) {
    const {method} = req
    const limit = req.query.id
    await dbConnect()
    switch (method){
        // GET METHOD
        case 'GET':
            try {
                const recentBooks = await Book.find().sort({total_downloads:-1}).limit(limit);
                res.status(200).json ({data:recentBooks})
            }catch(error){
                res.status(400).json({success:false})
            }
        break
        
        default:
            res.status(400).json({success:false})
        break
        }


};
