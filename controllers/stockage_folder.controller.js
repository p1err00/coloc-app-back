const Stockage_folder = require("../models/stockage_folder.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const stockage_folder = new Stockage_folder({
        id_stockage_folder: req.body.id_stockage_folder,
        id_stockage: req.body.id_stockage,
        id_user: req.body.id_user,
        nom: req.body.nom,
        path: req.body.path,
        is_shared: req.body.is_shared,
        id_shared: req.body.id_shared
    });

    Stockage_folder.create(stockage_folder, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAll = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Stockage_folder.getAll(req.params.userID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Stockage_folder.findById(req.params.userID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
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

    Stockage_folder.update(
        req.params.stockageFolderID,
        new Stockage_folder(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.stockageFolderID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.stockageFolderID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Stockage_folder.remove(req.params.stockageFolderID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found categorie with id ${req.params.stockageFolderID}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete categorie with id " + req.params.stockageFolderID
                });
            }
        } else res.send({ message: `stock was deleted successfully!` });
    });
}