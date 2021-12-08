const Choice = require("../models/choice.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const choice = new Choice({
        id_choice : req.body.id_choice,
        id_vote : req.body.id_vote,
        nom : req.body.nom,
        nb_vote : req.body.nb_vote
    });

    Choice.create(choice, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Choice.getAll(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Choice.findById(req.params.id, (err, data) => {
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

    Choice.update(
        req.params.choiceID,
        new Choice(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.choiceID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.choiceID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Choice.remove(req.params.choiceID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.choiceID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.choiceID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}