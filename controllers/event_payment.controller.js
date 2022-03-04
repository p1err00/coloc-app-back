const Event_payment = require("../models/event_payment.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const event_payment = new Event_payment({
        id: req.body.id,
        hash_event: req.body.hash_event,
        hash_payment: req.body.hash_payment,
        date_creation: req.body.date_creation,
        id_user: req.body.id_user,
        is_do: req.body.is_do,
        date_is_do: req.body.date_is_do
    });

    Event_payment.create(event_payment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAllByDateCreationAndIdUser = (req, res) => {
    Event_payment.getAllByDateCreationAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByIsDoAndIdUser = (req, res) => {
    Event_payment.getAllByIsDoAndIdUser(
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByDateIsDoAndIdUser = (req, res) => {
    Event_payment.getAllByDateIsDoAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByIdUser = (req, res) => {
    Event_payment.getAllByIdUser(
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByDateIsDoBetterThanAndIdUser = (req, res) => {
    Event_payment.getAllByDateIsDoBetterThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByDateIsDoLessThanAndIdUser = (req, res) => {
    Event_payment.getAllByDateIsDoLessThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByDateCreationBetterThanAndIdUser = (req, res) => {
    Event_payment.getAllByDateCreationBetterThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getAllByDateCreationLessThanAndIdUser = (req, res) => {
    Event_payment.getAllByDateCreationLessThanAndIdUser(
        req.params.date,
        req.params.idUser,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occured"
                });
            else res.send(data);
        });
}

exports.getById = (req, res) => {
    Event_payment.getById(
        req.params.id,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.stockId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Customer with id " + req.params.stockId
                    });
                }
            } else res.send(data);
        });
}

exports.getByHashEvent = (req, res) => {
    Event_payment.getByHashEvent(
        req.params.hash,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.stockId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Customer with id " + req.params.stockId
                    });
                }
            } else res.send(data);
        });
}

exports.getByHashPayment = (req, res) => {
    Event_payment.getByHashPayment(
        req.params.hash,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.stockId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Customer with id " + req.params.stockId
                    });
                }
            } else res.send(data);
        });
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Event_payment.update(
        req.params.id,
        new Event_payment(req.body),
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
    Event_payment.remove(req.params.id, (err, data) => {
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