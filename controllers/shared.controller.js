const Shared = require("../models/shared.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const shared = new Shared({
        id_shared : req.body.id_shared,
        id_user : req.body.id_user,
        id_folder : req.body.id_folder,
        extension : req.body.extension
    });

    Shared.create(shared, (err, data) => {
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
    Shared.getAll(req.params.userID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Shared.findById(req.params.userID, req.params.sharedID, (err, data) => {
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

    Shared.update(
        req.params.sharedID,
        new Shared(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.sharedID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.sharedID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Shared.remove(req.params.sharedID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.sharedID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.sharedID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}