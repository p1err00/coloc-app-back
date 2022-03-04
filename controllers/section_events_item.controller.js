const Section_events_item = require("../models/section_events_item.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const section_events_item = new Section_events_item({
        id: req.body.id,
        hash_event: req.body.hash_event,
        nom: req.body.nom,
        description: req.body.description,
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        is_do: req.body.is_do,
        categorie: req.body.categorie,
        is_multiple_event: req.body.is_multiple_event,
        have_external_user: req.body.have_external_user,
        id_coloc: req.body.id_coloc
    });

    Section_events_item.create(
        section_events_item,
        (err, data) => {

            if (err)
                res.status(500).send({
                    message:
                        err.message || "some error ocurred"
                });
            else res.send(data);
        });
}

exports.getAllByIsDoAndIdColoc = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByIsDoAndIdColoc(
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByCategorieAndIdColoc = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByCategorieAndIdColoc(
        req.params.categorie,
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByIsMultpipleEvent = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByIsMultpipleEvent(
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByDateStartAndIdColoc = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByDateStartAndIdColoc(
        req.params.date,
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByDateEndAndIdColoc = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByDateEndAndIdColoc(
        req.params.date,
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByIdColoc = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByIdColoc(
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByHaveExternalUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getAllByHaveExternalUser(
        req.params.idColoc,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getById = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getById(
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getByHash = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getByHash(
        req.params.hash,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getByNom = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_item.getByNom(
        req.params.nom,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
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

    Section_events_item.update(
        req.params.id,
        new Section_events_item(req.body),
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
    Section_events_item.remove(
        req.params.id,
        (err, data) => {
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