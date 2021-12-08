const Recurent_Tache = require("../models/recurent_tache.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Course
    const recurent_Tache = new Recurent_Tache({
        id: req.body.id,
        nom: req.body.nom
    });
    
    // Save Customer in the database
    Recurent_Tache.create(recurent_Tache, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.getAll = (req, res) => {
    Recurent_Tache.getAll(req.params.colocID,(err, data) => {
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
    Recurent_Tache.findById(req.params.recurent_tacheID, (err, data) => {
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

  Recurent_Tache.updateById(
    req.params.recurent_tacheID,
    new Course(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.recurent_tacheID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.recurent_tacheID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Recurent_Tache.remove(req.params.recurent_tacheID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.recurent_tacheID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.recurent_tacheID
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Recurent_Tache.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all courses."
          });
        else res.send({ message: `All courses were deleted successfully!` });
      });
};
