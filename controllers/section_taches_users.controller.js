const Section_taches_users = require("../models/Section_taches_users.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const section_taches_users = new Section_taches_users({
        id: req.body.id,
        hash_tache: req.body.hash_tache,
        id_user: req.body.id_user,
        hash_section: req.body.hash_section,
        is_do: req.body.is_do,
        date_end: req.body.date_end,
        date_start: req.body.date_start
    });

    Section_taches_users.create(section_taches_users, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

exports.getAllByIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_users.getAllByIdUser(
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByHash = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_users.getAllByHash(
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

exports.getAllByIdSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_users.getAllByIdSection(
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

exports.getAllByIsDoAndIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_users.getAllByIsDoAndIdUser(
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByDateStartAndIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_users.getAllByDateStartAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByDateEndAndIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Section_taches_users.getAllByDateEndAndIdUser(
        req.params.date,
        req.params.idUser,
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

    Section_taches_users.update(
        req.params.id,
        new section_taches_users(req.body),
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
    Section_taches_users.remove(
        req.params.id,
        (err, data) => {
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