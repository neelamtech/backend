module.exports = app => {
    const mdlStudent = require('../controllers/student.controller.js');
    var router = require("express").Router();

    router.post("/", tblstudent.create);
    // Retrieve all Tutorials
    router.get("/", tblstudent.findAll);

}