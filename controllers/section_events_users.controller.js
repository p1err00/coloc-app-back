const Section_events_users = require("../models/section_events_users.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const section_events_users = new Section_events_users({
        id: req.body.id,
        id_user: req.body.id_user,
        hash_section: req.body.hash_section,
        hash_event: req.body.hash_event,
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        is_do: req.body.is_do,
    });

    Section_events_users.create(
        section_events_users,
        (err, data) => {

            if (err)
                res.status(500).send({
                    message:
                        err.message || "some error ocurred"
                });
            else res.send(data);
        });
}

exports.getAllByIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.getAllByIdUser(
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByHashSection = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.getAllByHashSection(
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

exports.getAllByHashEvent = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.getAllByHashEvent(
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

exports.getAllByIsDoAndIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.getAllByIsDoAndIdUser(
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAlByStartDateAndIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.getAlByStartDateAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
}

exports.getAllByEndDateAndIdUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.getAllByEndDateAndIdUser(
        req.params.date,
        req.params.idUser,
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

    Section_events_users.getById(
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

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Section_events_users.update(
        req.params.id,
        new Section_events_users(req.body),
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
    Section_events_users.remove(
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