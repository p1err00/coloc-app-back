const Section_events = require("../models/section_events.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const section_events = new Section_events({
        id: req.body.id,
        id_coloc: req.body.id_coloc,
        hash_section: req.body.hash_section,
        nom: req.body.nom,
        nb_event: req.body.nb_event,
    });

    Section_events.create(section_events, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAllByIdColoc = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_events.getAllByIdColoc(
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByNom = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_events.getAllByNom(
        req.params.nom,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByHashSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_events.getAllByHashSection(
        req.params.hash,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getByNom = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_events.getByNom(
        req.params.nom,
        (err, data) => {
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

    Section_events.update(
        req.params.fileID,
        new Section_events(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.fileID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.fileID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Section_events.remove(req.params.fileID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found categorie with id ${req.params.fileID}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete categorie with id " + req.params.fileID
                });
            }
        } else res.send({ message: `stock was deleted successfully!` });
    });
}