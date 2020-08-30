
const express = require("express");
var mysql=require('mysql');
var router = express.Router();
var db=require('../database');
router.post('/create', function(req, res, next) {
      var Name     = req.body.name;
      var Emailid = req.body.email;
      var Password        = req.body.password;
      var Movie      = req.body.movie;
      var Time =req.body.time;
      var lim=0;
     // console.log(Time);
     //limiting max no of entries at a particular time to 20.
    db.query(`SELECT COUNT(*) FROM movies WHERE TIME=${mysql.escape(Time)}`,
    (err,rows)=>{
    if(err) throw err;
    lim=rows[0]['COUNT(*)'];
    console.log("MAXIMUM ENTRIES FOR GIVEN TIME:",lim);
    });
    if(lim>=20) {console.log("LIMIT FULL SORRY!");res.send("LIMIT FULL SORRY!")}
    else{
      //insertion in database.
    var sql = "INSERT INTO " + 'movies' + " (NAME,EMAIL,PHONENO,MOVIE,TIME) VALUES ('" + Name + "','" + Emailid + "','" + Password+ "','" + Movie + "','" + Time + "');"
     db.query(sql,function (err, data) {
        if (err) throw err;
             console.log("record inserted");
             res.send("record insertd!! "+ "Max seat occupied:"+ lim);
         });
        }
});

//checking entries at particualar time.
router.get('/show',(req,res)=>{
  console.log(check_time);
    var check_time=req.query.time;
   //console.log(mysql.escape(req.query.time));
  db.query(
  `SELECT * FROM movies WHERE TIME = ${mysql.escape(check_time)}`,
  (err, rows) => {
    if(err) throw err;
    console.log(rows);
    res.send(rows);
  }
);
});

router.get('/changes',(req,res)=>{
//1.for update
//2.delete
//3.information corresponding to id;
var ask=req.query.ask;
var t_old=req.query.t1;
var t_new=req.query.t2;
var id=req.query.id;
//update (option-1).
if(ask==1){
var sql = `UPDATE movies SET TIME = ${mysql.escape(t_new)} WHERE TIME= ${mysql.escape(t_old)}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send(result.affectedRows + " record(s) updated");
  });

}

else if(ask==2){
    //delete (option-2).
var sql = `DELETE FROM movies WHERE ID =${id}`;
db.query(sql,(error, results, fields) => {
  if (error)
    return console.error(error.message);

  console.log('Deleted Row(s):', results.affectedRows);
  res.send('Deleted Row(s):'+ results.affectedRows);
});
}
else {
//show info (option-3).    
var sql = `SELECT * FROM movies WHERE ID=${id}`;
db.query(sql, 1, (error, results, fields) => {
  if (error)
    return console.error(error.message);

  console.log(results);
  res.send(results);
});
}
});


router.get('/', function (req, res) {
  res.send('WELCOME');
})

 module.exports= router;