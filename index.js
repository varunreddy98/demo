const express = require('express');
const app =new express();  
app.set('view engine', 'ejs');
const body=require('body-parser');
app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.get('/', function(req, res){ 
    return res.render("home"); 
});
app.get('/add_products', function(req, res){ 
    return res.render("add_products"); 
});
app.post('/display_product', function(req, res){ 
    name1=req.body.name;
    category1=req.body.category;
    gender1=req.body.gender;
    price1=req.body.price;
    return res.render('display_product',{name:name1,category:category1,gender:gender1,price:price1});
});
/*app.get('/login', function(req, res) {
    var fname=req.query.fname;
    var lname=req.query.lname;
    res.send(fname+' '+lname);
});*/

app.listen(8080,function(){
    console.log("Running successfully");
})