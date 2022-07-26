 import dbConnect from "../../../lib/db"
import Book from "../../../models/book"


export default async function handler(req,res) {
    const {method} = req
    const bookID = req.query.id
    await dbConnect()
    switch (method){
        // GET METHOD
        case 'GET':
            try {
                const books = await Book.find({id:bookID});
                res.status(200).json ({data:books[0]})
            }catch(error){
                res.status(400).json({success:false})
            }
        break

        // Update book download total
        case 'PATCH':
            try{
                const updateDownloads = await Book.updateOne({id:bookID}, {$inc : {total_downloads: 1}})
                res.status(200).json({success:true},{updateDownloads})
            }
            catch(error){
                res.status(400).json({success:false})
            }
            break;

        default:
            res.status(400).json({success:false})
        break
        }


};
