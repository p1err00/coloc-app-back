const sql = require("./db.js");

const External_user = function (external_user) {
    this.id = external_user.id
    this.nom = external_user.nom
    this.prenom = external_user.prenom
    this.email = external_user.email
    this.phone = external_user.phone
    this.hash_event = external_user.hash_event
    this.hash_payment = external_user.hash_payment
    this.hash_tache = external_user.hash_tache
    this.id_coloc = external_user.id_coloc
    this.pseudo = external_user.pseudo
}

External_user.create = (newExternal_user, result) => {
    sql.query("INSERT INTO external_user SET ?", newExternal_user, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

External_user.getAllByIdColoc = (id, result) => {
    sql.query("SELECT * FROM external_user WHERE id_coloc = ?",
        id,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getAllByHashEvent = (hash, result) => {
    sql.query("SELECT * FROM external_user WHERE hash_event = ?",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getAllByHashPayment = (hash, result) => {
    sql.query("SELECT * FROM external_user WHERE hash_payment = ?",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getAllByHashTache = (hash, result) => {
    sql.query("SELECT * FROM external_user WHERE hash_tache = ?",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getById = (id, result) => {
    sql.query("SELECT * FROM external_user WHERE id = ?",
        id,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getByName = (nom, result) => {
    sql.query("SELECT * FROM external_user WHERE nom = ?",
        nom,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getByPrenom = (prenom, result) => {
    sql.query("SELECT * FROM external_user WHERE prenom = ?",
        prenom,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getByPhone = (phone, result) => {
    sql.query("SELECT * FROM external_user WHERE phone = ?",
        phone,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getByMail = (email, result) => {
    sql.query("SELECT * FROM external_user WHERE email = ?",
        email,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.getByPseudo = (pseudo, result) => {
    sql.query("SELECT * FROM external_user WHERE pseudo = ?",
        pseudo,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("external_user : ", res);
            result(null, res);
        });
}

External_user.update = (id, external_user, result) => {
    sql.query("UPDATE external_user SET nom = ?, prenom = ?, email = ?, phone = ?, hash_event = ?, hash_payment = ?, id_coloc = ?, pseudo = ? WHERE id = ?",
        [
            external_user.nom,
            external_user.prenom,
            external_user.email,
            external_user.phone,
            external_user.hash_event,
            external_user.hash_payment,
            external_user.id_coloc,
            external_user.pseudo,
            id
        ],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
            console.log("Updating :", { id_cha: result.id_cha, ...result });
        })
}

External_user.remove = (id, result) => {
    sql.query("DELETE FROM external_user WHERE id =?", id, (err, res) => {
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

        console.log("deleted categories with id: ", result);
        result(null, res);
    });
}

module.exports = External_user;
