const Abonnement = require("../models/abonnement.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const abonnement = new Abonnement({
        id_user : req.body.id_user,
        amount : req.body.amount,
        date_creation : req.body.date_creation,
        is_payed : req.body.is_payed,
        date_facturation : req.body.date_facturation,
        link : req.body.link,
        site_name : req.body.site_name,
    });

    Abonnement.create(abonnement, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Abonnement.getAll(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Abonnement.getById(req.params.idAbonnement, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findNotPayed = (req, res) => {
    Abonnement.getNotPayed(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findAlreadyPayed = (req, res) => {
    Abonnement.getAlreadyPayed(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Abonnement.update(
        req.params.idAbonnement,
        new Abonnement(req.body),
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
    Abonnement.remove(req.params.idAbonnement, (err, data) => {
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