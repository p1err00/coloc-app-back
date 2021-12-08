const Importance = require("../models/importance.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    //Create importance
    const importance = new Importance({
        id_i: req.body.id_i,
        nom_i: req.body.nom_i,
        index_i: req.body.index_i,
        id_coloc : req.body.id_coloc
    });

    //Save
    Importance.create(importance, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some errore occurred"
            });
        else res.send(data);
    });
}

//Get all importance
exports.findAll = (req, res) => {
    Importance.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error uccurred"
            });
        else res.send(data);
    });
}

exports.update = (req, res) => {
    if (!req.body) {
        res.sqtatus(400).send({
            message: "Content can't be empty"
        });
    }

    Importance.update(
        req.params.importanceID,
        new Importance(req.body), (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found with id ${req.params.id_i}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating with id " + req.params.importanceID
                    });
                }
            } else {
                res.send(data);
            }
        });
}

exports.delete = (req, res) => {
    Importance.remove(req.params, (err, data) => {
        if (err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `Not found with id ${req.params.importanceID}`
                });
            } else {
                res.status(500).send({
                    message: "Could not delet with id " + req.params.importanceID
                });
            }
        } else res.send({ message: "Importance delete successfully" });
    });
}