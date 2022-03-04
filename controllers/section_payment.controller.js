const Section_payment = require("../models/section_payment.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const section_payment = new Section_payment({
        id_user : req.body.id_user,
        id_coloc : req.body.id_coloc,
        date_debut : req.body.date_debut,
        date_fin : req.body.date_fin,
        nom : req.body.nom,
        categorie : req.body.categorie,
        budget: req.body.budget,
        hash: req.body.hash
    });

    Section_payment.create(section_payment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Section_payment.getAll(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Section_payment.getById(req.params.idSection, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findAllSectionByIdColoc = (req, res) => {
    Section_payment.getAllSectionByIdColoc(
        req.params.idColoc,
         (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findAllByCategories = (req, res) => {
    Section_payment.getAllByCategories(
        req.params.idColoc,
        req.params.idCategorie,
        (err, data) => {
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

    Section_payment.update(
        req.params.idSection,
        new Section_payment(req.body),
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
    Section_payment.remove(req.params.idSection, (err, data) => {
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