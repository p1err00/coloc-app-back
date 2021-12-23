const Choice_user = require("../models/choice_user.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const choice_user = new Choice_user({
        id_choice : req.body.id_choice,
        id_user : req.body.id_user,
        has_voted : req.body.has_voted,
        nom_choice : req.body.nom_choice,
        id_vote : req.body.id_vote
    });

    Choice_user.create(choice_user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.send(data);
    });
}

exports.findAll = (req, res) => {
    Choice_user.getAll(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    Choice_user.findById(req.params.id, (err, data) => {
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

    Choice_user.update(
        req.params.choiceID,
        new Choice_user(req.body),
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
    Choice_user.remove(
        req.params.choiceID,
        req.params.userID, (err, data) => {
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