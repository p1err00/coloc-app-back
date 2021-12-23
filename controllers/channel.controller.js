const Channel = require("../models/channel.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const channel = new Channel({
        id_channel : req.body.id_channel,
        nom_channel : req.body.nom_channel,
        date_creation : req.body.date_creation,
        id_coloc : req.body.id_coloc,
        hash : req.body.hash
    });

    Channel.create(channel, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}


exports.getAll = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Channel.getSend(req.params.userID, (err, data) => {
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

    Channel.update(
        req.params.channelID,
        new Channel(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.channelID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.channelID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Channel.remove(req.params.channelID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.channelID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.channelID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}