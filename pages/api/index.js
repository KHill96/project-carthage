export default function handler(req, res) {
  try{
    res.status(200).json({})
  }catch(error){
    res.status(400).json({success: false})
  }
}
