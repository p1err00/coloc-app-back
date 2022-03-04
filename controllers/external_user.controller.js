const External_user = require("../models/external_user.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const external_user = new External_user({
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        phone: req.body.phone,
        hash_event: req.body.hash_event,
        hash_payment: req.body.hash_payment,
        hash_tache: req.body.hash_tache,
        id_coloc: req.body.id_coloc,
        pseudo: req.body.pseudo
    });

    External_user.create(
        external_user,
        (err, data) => {

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
            message: "content can't be empty"
        });
    }

    External_user.getAllByIdColoc(
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

exports.getAllByHashEvent = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getAllByHashEvent(
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

exports.getAllByHashPayment = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getAllByHashPayment(
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

exports.getAllByHashTache = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getAllByHashTache(
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

exports.getById = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getById(
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

exports.getByName = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getByName(
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

exports.getByPrenom = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getByPrenom(
        req.params.prenom,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getByPhone = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getByPhone(
        req.params.phone,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getByMail = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getByMail(
        req.params.mail,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getByPseudo = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    External_user.getByPseudo(
        req.params.pseudo,
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

    External_user.update(
        req.params.id,
        new External_user(req.body),
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
    External_user.remove(
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