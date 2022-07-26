import dbConnect from "../../../lib/db"
import Movie from '../../../models/movie'


export default async function handler(req,res) {
    const {method} = req
    const movieID = req.query.id
    await dbConnect()
    switch (method){
        // GET METHOD
        case 'GET':
            try {
                const movie = await Movie.find({id:movieID});
                res.status(200).json ({data:movie[0]})
            }catch(error){
                res.status(400).json({success:false})
            }
        break

        // Update book download total
        case 'PATCH':
            try{
                const updateDownloads = await Movie.updateOne({id:movieID}, {$inc : {total_downloads: 1}})
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
