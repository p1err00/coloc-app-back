const User = require("../models/auth.model.js");
var jwt = require('jsonwebtoken');

exports.signin = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const user = new User({
        id_user: req.body.id_user,
        username_user: req.body.username_user,
        password_user: req.body.password_user,
        email_user: req.body.email_user,
        firstname_user : req.body.firstname_user,
        lastname_user : req.body.lastname_user,
        date_of_birth_user : req.body.date_of_birth_user,
        sexe_user : req.body.sexe_user,
        tel_user : req.body.tel_user,
        id_coloc : req.body.id_coloc,
        admin_user : req.body.admin_user
    });

    User.signin(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else {
            console.log(('azeazeae'));
            console.log(data);
            
            var token = jwt.sign({ id: data[0].id_user, email: data[0].email_user, name: data[0].username_user }, 'secret', { expiresIn: '1h' });
            // On donne le token à l'user et on retourne l'user
            console.log(token);

            res.status(201).json({
                message: "User successfully created!",
                token: token,
                result: data
            });  

        }
    });
}

//Create user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const user = new User({
        id_user: req.body.id_user,
        username_user: req.body.username_user,
        password_user: req.body.password_user,
        email_user: req.body.email_user,
        firstname_user : req.body.firstname_user,
        lastname_user : req.body.lastname_user,
        date_of_birth_user : req.body.date_of_birth_user,
        sexe_user : req.body.sexe_user,
        tel_user : req.body.tel_user,
        id_coloc : req.body.id_coloc,
        admin_user : req.body.admin_user

    });

    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "some error ocurred"
            });
        else res.status(201).send({
            message: "User successfully created!",
            result: data
        })
    });
}

//Get all user
exports.getAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

//Get user by id 
exports.getUserById = (req, res) => {
    User.getUserById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

//Update user
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content can't be empty"
        });
    }

    User.update(
        req.params.id,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Not found categorie with id ${req.params.chargesID}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating categorie with id " + req.params.chargesID
                    });
                }
            } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    User.remove(req.params, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found categorie with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete categorie with id " + req.params.id
                });
            }
        } else res.send({ message: `stock was deleted successfully!` });
    });
}