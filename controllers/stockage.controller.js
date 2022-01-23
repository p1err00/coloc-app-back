const Stockage = require("../models/stockage.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const stockage = new Stockage({
        id_stockage : req.body.id_stockage,
        id_user : req.body.id_user,
        nb_folder : req.body.nb_folder,
    });

    Stockage.create(stockage, (err, data) => {
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
    Stockage.getAll(req.params.userID, (err, data) => {
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

    Stockage.update(
        req.params.stockageID,
        new Stockage(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.stockageID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.stockageID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Stockage.remove(req.params.stockageID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.stockageID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.stockageID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}