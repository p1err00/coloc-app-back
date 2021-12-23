const Site = require("../models/site.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Course
  const site = new Site({
    id_s: req.body.id_s,
    nom_s: req.body.nom_s,
    url_s: req.body.url_s,
    id_user : req.body.id_user
  });

  // Save Customer in the database
  Site.create(site, (err, data) => {
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
    Site.getAll((err, data) => {
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
    Site.findById(req.params.siteID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.stockId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.stockId
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

  Site.updateById(
    req.params.siteID,
    new Site(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found stock with id ${req.params.siteID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating stock with id " + req.params.siteID
          });
        }
      } else res.send(data);
    }
  );
}

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Site.remove(req.params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.siteID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete stock with id " + req.params.siteID
        });
      }
    } else res.send({ message: `stock was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Site.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stock."
      });
    else res.send({ message: `All stock were deleted successfully!` });
  });
};