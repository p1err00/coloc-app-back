const Tache_payment = require("../models/tache_payment.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const tache_payment = new Tache_payment({
        id_user : req.body.id_user,
        id_coloc : req.body.id_coloc,
        date_debut : req.body.date_debut,
        date_fin : req.body.date_fin,
        nom : req.body.nom,
        categorie : req.body.categorie,
        budget : req.body.budget
    });

    Tache_payment.create(tache_payment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAllByDateCreationAndIdUser = (req, res) => {
    Tache_payment.getAllByDateCreationAndIdUser(
        req.params.dateCreation,
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
    Tache_payment.getAllByIsDoAndIdUser(
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
    Tache_payment.getAllByDateIsDoAndIdUser(
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
    Tache_payment.getAllByIdUser(
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
    Tache_payment.getAllDateIsDoByBetterThanAndIdUser(
        req.params.betterThan,
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
    Tache_payment.getAllDateIsDoByLessThanAndIdUser(
        req.params.lessThan,
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
    Tache_payment.getAllDateCreationByBetterThanAndIdUser(
        req.params.betterThan,
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
    Tache_payment.getAllDateCreationByLessThanAndIdUser(
        req.params.lessThan,
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
    Tache_payment.getById(
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

exports.getByHashTache = (req, res) => {
    Tache_payment.getByHashTache(
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
    Tache_payment.getByHashPayment(
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

    Tache_payment.update(
        req.params.idTache,
        new Tache_payment(req.body),
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
    Tache_payment.remove(req.params.id, (err, data) => {
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