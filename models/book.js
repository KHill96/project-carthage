const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    author:{
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
    total_downloads:{
        type:Number,
        required:true
    },
    html_link:{
        type: String,
        required: true
    },
    pdf_link:{
        type: String,
        required: true
    },
    azw3_link:{
        type: String,
        required: true
    },
    epub_link:{
        type: String,
        required: true
    },
    tag_1:{
      type:String,
      required:true  
    },
    date:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.models.Book || mongoose.model('Book', bookSchema)