const Stock = require("../models/stock.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  console.log("requete reçu");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Course
  const stock = new Stock({
    id_con: req.body.id_con,
    nom_con: req.body.nom_con,
    quantite_con: req.body.quantite_con,
    importance: req.body.importance,
    categorie: req.body.categorie,
    date_achat_con: req.body.date_achat_con,
    date_peremption_con: req.body.date_peremption_con,
    id_coloc : req.body.id_coloc
  });

  // Save Customer in the database
  Stock.create(stock, (err, data) => {
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
  Stock.getAll((err, data) => {
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
  Stock.findById(req.params.stockId, (err, data) => {
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

  Stock.updateById(
    req.params.stockID,
    new Stock(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found stock with id ${req.params.stockID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating stock with id " + req.params.stockID
          });
        }
      } else res.send(data);
    }
  );
}

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Stock.remove(req.params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.stockId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete stock with id " + req.params.stockId
        });
      }
    } else res.send({ message: `stock was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Stock.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stock."
      });
    else res.send({ message: `All stock were deleted successfully!` });
  });
};