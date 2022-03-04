const Section_taches_item = require("../models/section_taches_item.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const section_taches_item = new Section_taches_item({
        id: req.body.id,
        hash_tache: req.body.hash_tache,
        nom: req.body.nom,
        description: req.body.description,
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        is_do: req.body.is_do,
        categorie: req.body.categorie,
        is_multiple_tache: req.body.is_multiple_tache,
        id_section: req.body.id_section
    });

    Section_taches_item.create(section_taches_item, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

exports.getAllByIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getAllByIdSection(
        req.params.id, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByIsDoAndIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getAllByIsDoAndIdSection(
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error nique ta mere"
                });
            else res.send(data);
        });
}

exports.getAllByCategorieAndIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getAllByCategorieAndIdSection(
        req.params.categorie,
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByIsMultipleTacheAndIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getAllByIsMultipleTacheAndIdSection(
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurreSd"
                });
            else res.send(data);
        });
}

exports.getAllByDateStartAndIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getAllByDateStartAndIdSection(
        req.params.date,
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByDateEndAndIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getAllByDateEndAndIdSection(
        req.params.date,
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getById = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getById(
        req.params.id,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getByHash = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_item.getByHash(
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
    Section_taches_item.getByNom(
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

    Section_taches_item.update(
        req.params.id,
        new Section_taches_item(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.sharedID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.sharedID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Section_taches_item.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found categorie with id ${req.params.sharedID}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete categorie with id " + req.params.sharedID
                });
            }
        } else res.send({ message: `stock was deleted successfully!` });
    });
}