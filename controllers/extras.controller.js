const Extra = require("../models/extras.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Course
    const extra = new Extra({
        id_ex: req.body.id,
        nom_ex: req.body.nom_ex,
        valeur_ex: req.body.valeur_ex,
        select_ex: req.body.select_ex,
        id_user : req.body.id_user
    });
    
    // Save Customer in the database
    Extra.create(extra, (err, data) => {
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
    Extra.getAll((err, data) => {
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
    Extra.findById(req.params.extraID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.extraID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.extraID
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

  Extra.update(
    req.params.extrasID,
    new Extra(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.extraID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.extraID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  console.log(req.params);
  Extra.remove(req.params, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.extraID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.extraID
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Extra.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all courses."
          });
        else res.send({ message: `All courses were deleted successfully!` });
      });
};
