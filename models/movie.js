const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    cover_image_link:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    file_location:{
        type: String,
        required: true
    },
    subtitle_file_english:{
        type: String,
        required: true
    },
    subtitle_file_spanish:{
        type: String,
        required: true
    },
    tag_1:{
      type:String,
      required:true  
    },
    total_downloads:{
        type:Number,
        required:true
    },
    total_views:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.models.Movie || mongoose.model('Movie', movieSchema)