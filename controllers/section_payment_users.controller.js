const Section_payment_users = require("../models/section_payment_users.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const payment = new Section_payment_users({
        id_payment: req.body.id_payment,
        id_user: req.body.id_user,
        hash_payment: req.body.hash_payment,
        amount_payed_user: req.body.amount_payed_user,
        last_date_payment: req.body.last_date_payment
    });

    Section_payment_users.create(payment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.getAllByIdPayment = (req, res) => {
    Section_payment_users.getAllByIdPayment(
        req.params.idPayment,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred"
                });
            else res.send(data);
        });
}

exports.getAllByIdUser = (req, res) => {
    Section_payment_users.getAllByIdUser(
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
    Section_payment_users.getAllByHash(
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

exports.getAllByAmoutPaid = (req, res) => {
    Section_payment_users.getAllByAmoutPaid(
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

exports.getByLastDatePayment = (req, res) => {
    Section_payment_users.getByLastDatePayment(
        req.params.date,
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
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Section_payment_users.update(
        req.params.id,
        new Section_payment_users(req.body),
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
    Section_payment_users.remove(
        req.params.id, (err, data) => {
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