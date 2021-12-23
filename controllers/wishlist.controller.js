const Wishlist = require("../models/wishlist.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Course
  const wishlist = new Wishlist({
    id_w: req.body.id_w,
    nom_w: req.body.nom_w,
    prix_w: req.body.prix_w,
    url_w: req.body.url_w,
    desc_w: req.body.desc_w,
    id_user : req.body.id_user
  });

  // Save Customer in the database
  Wishlist.create(wishlist, (err, data) => {
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
    Wishlist.getAll((err, data) => {
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
    Wishlist.findById(req.params.wishID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.wishID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.wishID
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

  Wishlist.updateById(
    req.params.wishID,
    new Wishlist(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found stock with id ${req.params.wishID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating stock with id " + req.params.wishID
          });
        }
      } else res.send(data);
    }
  );
}

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Wishlist.remove(req.params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.wishID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete stock with id " + req.params.wishID
        });
      }
    } else res.send({ message: `stock was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Wishlist.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stock."
      });
    else res.send({ message: `All stock were deleted successfully!` });
  });
};