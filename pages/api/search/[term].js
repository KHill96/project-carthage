import dbConnect from '../../../lib/db'
import Book from '../../../models/book'

export default async function handler(req,res){
    const {method} = req
    const searchQuery = req.query.term
    console.log(searchQuery)
    await dbConnect()
    switch (method){
        case 'GET':
            // Search Priorit goes Title, Author, Description
            try{
                let returnedItems = await Book.find({$or: 
                    [
                        // Title
                        {title: {$regex: `${searchQuery}`, $options:'i'}},
                        // Author
                        {author: {$regex: `${searchQuery}`, $options:'i'}},
                        // Description
                        // {description: {$regex: `${searchQuery}`, $options:'i'}},

                    ]
                })
                if (returnedItems.length !== 0)
                    res.status(200).json({success:true, data:returnedItems})
                else
                    res.status(200).json({success:false})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        default:
            res. status(400).json({success:false})
    }
}