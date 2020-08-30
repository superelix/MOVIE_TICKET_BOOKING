var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost", // Replace with your host name
  user: "root",      // Replace with your database username
  password: "aniruddha19981@",      // Replace with your database password
 //
  database: "mydb" ,// // Replace with your database Name
  insecureAuth : true
}); 
//establishing connection with database.
conn.connect(function(err) {
  if (err) {
       console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Database is connected successfully !');
});
//delete all the values that are previous to 8hrs from current time.
let sql = `DELETE FROM movies WHERE TIME<=(select date_sub(now(),interval 8 hour))`;
conn.query(sql, 1, (error, results, fields) => {
  if (error)
    return console.error(error.message);
  console.log('Deleted Row(s):', results.affectedRows);
});
module.exports = conn;