const express = require('express');

const app = express();
const port = 3000;

// Static files

app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/img',express.static(__dirname+'/public/img'));

// View Engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{title:'Public Repository'});
});

app.get('/books/:id',function(req,res){
    res.render('book');
});

app.get('/movies/:id',function(req,res){
    res.render('movie');
});


app.get('/about',function(req,res){
    res.sendFile(__dirname,'/views/about.html');
});

app.listen(port);
