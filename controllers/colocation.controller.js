const Colocation = require("../models/colocation.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const colocation = new Colocation({
        id_coloc : req.body.id_coloc,
        nom_coloc : req.body.nom_coloc,
        nb_personnes_coloc : req.body.nb_personnes_coloc,
        date_creation_coloc : req.body.date_creation_coloc,
        loyer_coloc : req.body.loyer_coloc,
        user_course : req.body.user_course
    });

    Colocation.create(colocation, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Colocation.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findOne = (req, res) => {
    Colocation.findById(req.params.colocationID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.colocationID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.colocationID
          });
        }
      } else res.send(data);
    });
  };

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Colocation.update(
        req.params.colocationID,
        new Colocation(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.colocationID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.colocationID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Colocation.remove(req.params, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.colocationID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.colocationID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}