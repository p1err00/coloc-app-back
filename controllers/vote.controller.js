const Vote = require("../models/vote.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const vote = new Vote({
        id_vote : req.body.id_vote,
        nom : req.body.nom,
        instigator : req.body.instigator,
        date_creation : req.body.date_creation,
        is_anonyme : req.body.is_anonyme,
        nb_response : req.body.nb_response,
        id_coloc : req.body.id_coloc,
        timer : req.body.timer
    });

    Vote.create(vote, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Vote.getAll(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Vote.findById(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    Vote.update(
        req.params.voteID,
        new Vote(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.voteID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.voteID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Vote.remove(req.params.voteID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.voteID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.voteID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}