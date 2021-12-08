const Message = require("../models/message.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const message = new Message({
        id_message : req.body.id_message,
        date_envoi : req.body.date_envoi,
        file : req.body.file,
        id_channel : req.body.id_channel,
        id_user_send : req.body.id_user_send,
        message : req.body.message,
        seen : req.body.seen,
    });

    Message.create(message, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Message.getAll(req.params.channelID, (err, data) => {
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

    Message.update(
        req.params.messageID,
        new channel(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.messageID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.messageID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Message.remove(req.params.messageID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.messageID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.messageID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}