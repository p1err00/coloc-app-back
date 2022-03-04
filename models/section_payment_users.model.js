const sql = require("./db.js");

const Section_payment_users = function (section_payment_users) {
    this.id_coloc = section_payment_users.id_coloc
    this.id_user = section_payment_users.id_user
    this.date_debut = section_payment_users.date_debut
    this.date_fin = section_payment_users.date_fin
    this.nom = section_payment_users.nom
    this.categorie = section_payment_users.categorie
    this.budget = section_payment_users.budget
}

Section_payment_users.create = (newSection_payment_users, result) => {
    sql.query("INSERT INTO section_payment_users SET ?", newSection_payment_users, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Section_payment_users.getAllByIdPayment = (id, result) => {
    sql.query("SELECT * FROM section_payment_users WHERE id_payment = ?",
        id,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_payment_users.getAllByIdUser = (id, result) => {
    sql.query("SELECT * FROM section_payment_users WHERE id_user = ?",
        id,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_payment_users.getAllByHash = (hash, result) => {
    sql.query("SELECT * FROM section_payment_users WHERE hash_payment = ?",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_payment_users.getAllByAmoutPaid = (id, result) => {
    sql.query("SELECT amount_payed_user FROM section_payment_users WHERE id_user = ?",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_payment_users.getByLastDatePayment = (id, result) => {
    sql.query("SELECT * FROM section_payment_users WHERE date = ? ORDER BY last_date_payment DESC LIMIT 1",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_payment_users.getById = (id, result) => {
    sql.query(`SELECT * FROM section_payment_users WHERE hash = ${hash}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};


Section_payment_users.update = (id, section_payment_users, result) => {
    sql.query("UPDATE `section_payment_users` SET `id_user`=?,`hash_payment`=?,`amount_payed_user`=?,`last_date_payment`=? WHERE id = ?",
        [section_payment_users.id_user, section_payment_users.hash_payment, section_payment_users.amount_payed_user, section_payment_users.last_date_payment, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
        })
}

Section_payment_users.remove = (id, result) => {
    sql.query("DELETE FROM section_payment_users WHERE id =?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

    });
}

module.exports = Section_payment_users;