const Section_taches = require("../models/section_taches.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const section_taches = new Section_taches({
        id : req.body.id,
        id_coloc : req.body.id_coloc,
        hash_section : req.body.hash_section,
        nom : req.body.nom,
        nb_taches : req.body.nb_taches,
    });

    Section_taches.create(section_taches, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAllByIdUser = (req, res) => {
    Section_taches.getAllByIdUser(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.getAllByHash = (req, res) => {
    Section_taches.getAllByHash(req.params.hash, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.getById = (req, res) => {
    Section_taches.getById(req.params.idSection, (err, data) => {
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

    Section_taches.update(
        req.params.idSection,
        new Section_taches(req.body),
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
    Section_taches.remove(req.params.idSection, (err, data) => {
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