const Wishlist_payment = require("../models/wishlist_payment.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const wishlist_payment = new Wishlist_payment({
        id : req.body.id,
        id_user : req.body.id_user,
        hash_wish : req.body.hash_wish,
        hash_payment : req.body.hash_payment,
        is_do : req.body.is_do,
        date_is_do : req.body.date_is_do,
        date_creation : req.body.date_creation
    });

    Wishlist_payment.create(wishlist_payment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAllByDateCreationAndIdUser = (req, res) => {
    Wishlist_payment.getAllByDateCreationAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllByIsDoAndIdUser = (req, res) => {
    Wishlist_payment.getAllByIsDoAndIdUser(
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllByDateIsDoAndIdUser = (req, res) => {
    Wishlist_payment.getAllByDateIsDoAndIdUser(
        req.params.dateIsDo,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllByIdUser = (req, res) => {
    Wishlist_payment.getAllByIdUser(
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllDateIsDoByBetterThanAndIdUser = (req, res) => {
    Wishlist_payment.getAllDateIsDoByBetterThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllDateIsDoByLessThanAndIdUser = (req, res) => {
    Wishlist_payment.getAllDateIsDoByLessThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllDateCreationByBetterThanAndIdUser = (req, res) => {
    Wishlist_payment.getAllDateCreationByBetterThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getAllDateCreationByLessThanAndIdUser = (req, res) => {
    Wishlist_payment.getAllDateCreationByLessThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occured"
            });
        else res.send(data);
    });
}

exports.getById = (req, res) => {
    Wishlist_payment.getById(
        req.params.id,
        (err, data) => {
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
}

exports.getByHashWish = (req, res) => {
    Wishlist_payment.getByHashWish(
        req.params.hash,
        (err, data) => {
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
}

exports.getByHashPayment = (req, res) => {
    Wishlist_payment.getByHashPayment(
        req.params.hash,
        (err, data) => {
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
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Wishlist_payment.update(
        req.params.idTache,
        new Wishlist_payment(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.categorieID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.categorieID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Wishlist_payment.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.categorieID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.categorieID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}