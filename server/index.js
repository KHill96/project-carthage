const express = require('express');
// Create app
const app = express();
const cors = require("cors");
app.use(cors({
    origin:'http://localhost:3000'
}))

app.get('/',function(req,res){
    res.send("<h1>Up and running<h1/>")
})

app.get('/api/',function(req,res){
    res.send({
        title:'Placeholder Title',
        author:'Placeholder Author',
        cover_image_link:'/Assets/id/foobar.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,, sunt in culpa qui officia deserunt mollit anim id est laborum',
        total_views:150,
        html_link:"#",
        pdf_link:"#",
        azw3_link:"#",
        epub_link:"#"
    })

});



// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Listening on 4000")
});