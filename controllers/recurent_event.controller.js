const Recurent_Event = require("../models/recurent_event.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Course
    const recurent_event = new Recurent_Event({
        id: req.body.id,
        nom: req.body.nom,
        id_coloc : req.body.id_coloc
    });
    
    // Save Customer in the database
    Recurent_Event.create(recurent_event, (err, data) => {
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
    Recurent_Event.getAll(req.params.colocID,(err, data) => {
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
    Recurent_Event.findById(req.params.recurent_eventID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.recurent_eventID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.recurent_eventID
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

  Recurent_Event.updateById(
    req.params.recurent_eventID,
    new Recurent_Event(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.recurent_eventID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.recurent_eventID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Recurent_Event.remove(req.params.recurent_eventID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.recurent_eventID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.recurent_eventID
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Recurent_Event.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all courses."
          });
        else res.send({ message: `All courses were deleted successfully!` });
      });
};
