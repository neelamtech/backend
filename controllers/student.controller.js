const tblstudent = require("../models/student.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const tblstudent = new tblstudent({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
      });
    
      tblstudent.create(tblstudent, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the student."
          });
        else res.send(data);
      });
    };

    exports.findOne = (req, res) => {
        tblstudent.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found student with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving student with id " + req.params.id
              });
            }
          } else res.send(data);
        });
      };


      // Retrieve all Tutorials from the database (with condition).
      exports.findAll = (req, res) => {
        const title = req.query.title;
        console.log("error neelam: ");
        tblstudent.getAll(title, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          else res.send(data);
        });
      };