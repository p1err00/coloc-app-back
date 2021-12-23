const sql = require("./db.js");
const mysql = require('mysql');

// constructor
const User = function (user) {
    this.id_user = user.id_user,
    this.username_user = user.username_user,
    this.password_user = user.password_user,
    this.email_user = user.email_user,
    this.firstname_user = user.firstname_user,
    this.lastname_user = user.lastname_user,
    this.date_of_birth_user = user.date_of_birth_user,
    this.sexe_user = user.sexe_user,
    this.tel_user = user.tel_user,
    this.id_coloc = user.id_coloc,
    this.admin_user = user.admin_user,
    this.loyer = user.loyer
};

//Signin user
User.signin = (utilisateur, result) => {

    sql.query('SELECT * FROM utilisateurs WHERE username_user = ?', [utilisateur.username_user], function (err, res) {


        sql.query('SELECT * FROM utilisateurs WHERE id_user = ?', [res[0].id_user], function(err, resp){

            user = resp;

        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (utilisateur.password_user === user[0].password_user && utilisateur.username_user === user[0].username_user) {
                
                result(null, { id: res.insertId, ...user });

            } else {
                return result(result);
            }
        }
        });
    });
}

//Create user
User.create = (newUser, result) => {
    sql.query("INSERT INTO utilisateurs SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newUser });
    });
};

//Get user by id
User.getUserById = (id, result) => {
    sql.query(`SELECT * FROM utilisateurs WHERE id_user = "${id}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM utilisateurs", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

User.update = (id, user, result) => {
    sql.query(
        "UPDATE `utilisateurs` SET `username_user`= ?,`password_user`= ?,`email_user`= ?, firstname_user = ?, lastname_user = ?, date_of_birth_user = ?, sexe_user = ?, tel_user = ?, id_coloc = ?, admin_user = ?, loyer =? WHERE id_user = ?",
        [user.username_user, user.password_user, user.email_user, user.firstname_user, user.lastname_user, user.date_of_birth_user, user.sexe_user, user.tel_user, user.id_coloc, user.admin_user, user.loyer, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...user });
        }
    );
};

User.remove = (id, result) => {
    console.log(id);
    sql.query("DELETE FROM `utilisateurs` WHERE id_user = ?", id.id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = User;
