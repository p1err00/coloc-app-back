const Evenements = require("../models/evenements.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  console.log("requete reçu");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Course
  const evenements = new Evenements({
    id_e: req.body.id_e,
    nom_e: req.body.nom_e,
    date_exec_e: req.body.date_exec_e,
    date_fin_e: req.body.date_fin_e,
    desc_e: req.body.desc_e,
    done_e: req.body.done_e,
    id_coloc : req.body.id_coloc
  });

  // Save Customer in the database
  Evenements.create(evenements, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stock."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Evenements.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stock."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Evenements.findById(req.params.eventID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.eventID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.eventID
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

  Evenements.updateById(
    req.params.eventID,
    new Evenements(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found stock with id ${req.params.eventID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating stock with id " + req.params.eventID
          });
        }
      } else res.send(data);
    }
  );
}

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Evenements.remove(req.params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.eventID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete stock with id " + req.params.eventID
        });
      }
    } else res.send({ message: `stock was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Evenements.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stock."
      });
    else res.send({ message: `All stock were deleted successfully!` });
  });
};