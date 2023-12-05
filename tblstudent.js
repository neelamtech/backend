const mysql = require('./config/db_connect.js');


//to get all data
mysql.query('SELECT * FROM tblstudent',(err,results) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(results); 
});

//to get perticular data
mysql.query("SELECT * FROM tblstudent WHERE id = 1 and name = 'Neelam'",(err,results) =>{
  if(err){
      console.log(err);
      return;
  }
  console.log(results); 
});

// to delete perticular data
mysql.query("DELETE FROM tblstudent WHERE id = 1 AND name = 'Neelam'", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(results);
});
//add perticular data at specified position
// mysql.query("INSERT INTO tblstudent (id, name, email) VALUES (8, 'John', john@gmail.com)", (err, results) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(results);
// });


