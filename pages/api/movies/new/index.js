import dbConnect from "../../../../lib/db"
import Movie from "../../../../models/movie"


export default async function handler(req,res) {
    const {method} = req
    await dbConnect()
    switch (method){
        // GET METHOD
        case 'GET':
            try {
                const recentMovies = await Movie.find().sort({date:-1});
                res.status(200).json ({data:recentMovies})
            }catch(error){
                res.status(400).json({success:false})
            }
        break
        
        default:
            res.status(400).json({success:false})
        break
        }


};
