const Channel_user = require("../models/channel_user.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const channel_user = new Channel_user({
        id_channel : req.body.id_channel,
        id_user : req.body.id_user,
        id_coloc : req.body.id_coloc,
        nom : req.body.nom,
        deleteChannel : req.body.deleteChannel,
        last_message : req.body.last_message
    });

    Channel_user.create(channel_user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}


exports.findAll = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Channel_user.getAll(req.params.userID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById  = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }
    Channel_user.getById(req.params.channel_userID, (err, data) => {
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

    Channel_user.update(
        req.params.channeUserlID,
        new Channel_user(req.body),
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

exports.updateById = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Channel_user.updateById(
        req.params.channeUserlID,
        req.params.user,
        new Channel_user(req.body),
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
  Channel_user.remove(req.params.channelID, (err, data) => {
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