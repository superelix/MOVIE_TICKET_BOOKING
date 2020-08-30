const express = require("express");
const bodyParser = require("body-parser");
const mysql=require("mysql");
const app = express();
var userRouter=require('./routes/input.js')
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/home',userRouter);
//take input from customers.
 app.get('/input',(req,res)=>{
     res.sendFile(__dirname+'/view/input.html');
 });
 //check entire at aparticular time.
app.get('/check',(req,res)=>{
    res.sendFile(__dirname+'/view/checkentries.html');
});
//used to perform update and delete operations on data base.
app.get('/operations',(req,res)=>{
res.sendFile(__dirname+'/view/update.html');
});
 app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
