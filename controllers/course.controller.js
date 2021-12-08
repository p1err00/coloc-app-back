const Course = require("../models/courses.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Course
    const course = new Course({
        id: req.body.id,
        nom_cou: req.body.nom_cou,
        nb_buy_cou: req.body.nb_buy_cou,
        last_buy_cou: req.body.last_buy_cou,
        prix_cou: req.body.prix_cou,
        id_coloc : req.body.id_coloc
    });
    
    // Save Customer in the database
    Course.create(course, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Course.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Course.findById(req.params.coursId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.courseId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.courseId
            });
          }
        } else res.send(data);
      });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Course.updateById(
    req.params.coursesId,
    new Course(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.coursesId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.coursesId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  console.log(req.params);
    Course.remove(req.params, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.courseId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.courseId
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Course.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all courses."
          });
        else res.send({ message: `All courses were deleted successfully!` });
      });
};
