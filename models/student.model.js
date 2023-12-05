const sql = require("../config/db_connect.js");

// constructor
const mdlStudent = function(mdlStudent) {
  this.id = tblstudent.id;
  this.name = tblstudent.name;
  this.email = tblstudentl.email;
  this.published = tblstudent.published;
  this.mobile_no = tblstudent.mobile_no;
};

tblstudent.create = (newtblstudent, result) => {
  sql.query("INSERT INTO student SET ?", newtblstudent, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created student: ", { id: res.insertId, ...newtblstudent });
    result(null, { id: res.insertId, ...newtblstudent });
  });
};

mdlStudent.findById = (id, result) => {
  sql.query(`SELECT * FROM student WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found student: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found student with the id
    result({ kind: "not_found" }, null);
  });
};

tblstudent.getAll = (name, result) => {
  let query = "SELECT * FROM tblstudent";

  if (name) {
    query += ` WHERE title LIKE '%${name}%'`;
  }
  console.log("error neelam: ");
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("student ", res);
    result(null, res);
  });
};

module.exports = tblstudent;
