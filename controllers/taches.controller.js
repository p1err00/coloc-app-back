const Taches = require("../models/taches.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Course
  const taches = new Taches({
    id_t: req.body.id_t,
    nom_t: req.body.nom_t,
    date_exec_t: req.body.date_exec_t,
    date_fin_t: req.body.date_fin_t,
    desc_t: req.body.desc_t,
    done_t: req.body.done_t,
    personne_t: req.body.personne_t,
    nb_select_t: req.body.nb_select_t,
    id_coloc : req.body.id_coloc
  });

  // Save Customer in the database
  Taches.create(taches, (err, data) => {
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
    Taches.getAll((err, data) => {
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
    Taches.findById(req.params.tachesID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.tachesID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.tachesID
        });
      }
    } else res.send(data);
  });
};

exports.findByUser = (req, res) => {
  Taches.findByUser(req.params.userID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.tachesID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.tachesID
        });
      }
    } else res.send(data);
  });
}

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Taches.updateById(
    req.params.tachesID,
    new Taches(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found stock with id ${req.params.tachesID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating stock with id " + req.params.tachesID
          });
        }
      } else res.send(data);
    }
  );
}

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Taches.remove(req.params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.tachesID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete stock with id " + req.params.tachesID
        });
      }
    } else res.send({ message: `stock was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Taches.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stock."
      });
    else res.send({ message: `All stock were deleted successfully!` });
  });
};