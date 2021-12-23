const CourseCourante = require("../models/courses_courante.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Course
    const courseCourante = new CourseCourante({
        id: req.body.id,
        nom_cur_cou: req.body.nom_cur_cou,
        nb_buy_cur_cou: req.body.nb_buy_cur_cou,
        last_buy_cur_cou: req.body.last_buy_cur_cou,
        prix_cur_cou: req.body.prix_cur_cou,
        id_coloc : req.body.id_coloc,
        done : req.body.done
    });
    
    // Save Customer in the database
    CourseCourante.create(courseCourante, (err, data) => {
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
    CourseCourante.getAll((err, data) => {
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
    CourseCourante.findById(req.params.coursesCID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.coursesCID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.coursesCID
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

  CourseCourante.updateById(
    req.params.coursesCID,
    new CourseCourante(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.coursesCID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.coursesCID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  CourseCourante.remove(req.params.coursesCID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.coursesCID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.coursesCID
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    CourseCourante.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all courses."
          });
        else res.send({ message: `All courses were deleted successfully!` });
      });
};
