const Payment = require("../models/payment.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const payment = new Payment({
        id_user : req.body.id_user,
        amount : req.body.amount,
        date_creation : req.body.date_creation,
        is_payed : req.body.is_payed,
        date_payment : req.body.date_payment,
        link : req.body.link,
        nom : req.body.nom,
        id_section : req.body.id_section,
        type : req.body.type
    });

    Payment.create(payment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Payment.getAll(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Payment.getById(req.params.idPayment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findNotPayed = (req, res) => {
    Payment.getNotPayed(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findAlreadyPayed = (req, res) => {
    Payment.getAlreadyPayed(req.params.idUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findByIdSection = (req, res) => {
    Payment.getByIdSection(
        req.params.idSection,
        req.params.idUser,
         (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
            });
            else res.send(data);
    });
}

exports.findByType = (req, res) => {
    Payment.getByType(req.params.idType,
        req.params.idUser,
        (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||"Some error occured"
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

    Payment.update(
        req.params.idPayment,
        new Payment(req.body),
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
    Payment.remove(req.params.idPayment, (err, data) => {
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