const Charges = require("../models/charges.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const charges = new Charges({
        id_cha : req.body.id_cha,
        nom_cha : req.body.nom_cha,
        valeur_cha : req.body.valeur_cha,
        select_cha : req.body.select_cha,
        id_user : req.body.id_user
    });

    Charges.create(charges, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Charges.getAll(req.params.userID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Charges.findById(req.params.userID, req.params.chargesID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Charges.update(
        req.params.chargesID,
        new Charges(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.chargesID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.chargesID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Charges.remove(req.params, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.chargesID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.chargesID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}