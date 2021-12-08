const Notification = require("../models/notification.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const notification = new Notification({
        id_notif : req.body.id_notif,
        nom_notif : req.body.nom_notif,
        desc_notif : req.body.desc_notif,
        date_creation_notif : req.body.date_creation_notif,
        is_read : req.body.is_read,
        id_coloc : req.body.id_coloc,
        id_user_send : req.body.id_user_send,
        id_user_receive :req.body.id_user_receive
    });

    Notification.create(notification, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Notification.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

// Find a single Customer with a customerId
exports.findById = (req, res) => {
    Notification.findById(req.params.notificationID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.notificationID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.notificationID
          });
        }
      } else res.send(data);
    });
  };
  
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Notification.update(
        req.params.notificationID,
        new Notification(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.notificationID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.notificationID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Notification.remove(req.params, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.notificationID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.categorieID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}