const File = require("../models/file.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const file = new File({
        id_file : req.body.id_file,
        id_stockage_folder : req.body.id_stockage_folder,
        nom : req.body.nom,
        extension : req.body.extension,
        path : req.body.path,
        id_user : req.body.id_user,
        public : req.body.public,
        is_shared : req.body.is_shared,
        id_shared : req.body.id_shared,
    });

    File.create(file, (err, data) => {
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
    File.getAll(req.params.userID, req.params.stockage_folderID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.findById = (req, res) => {
    File.findById(req.params.userID, req.params.fileID, (err, data) => {
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

    File.update(
        req.params.fileID,
        new File(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.fileID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.fileID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    File.remove(req.params.fileID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found categorie with id ${req.params.fileID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete categorie with id " + req.params.fileID
            });
          }
        } else res.send({ message: `stock was deleted successfully!` });
      });
}