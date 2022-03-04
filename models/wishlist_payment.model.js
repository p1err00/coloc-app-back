const sql = require("./db.js");

const Wishlist_payment = function (wishlist_payment) {
    this.id_coloc =wishlist_payment.id_coloc
    this.id_user =wishlist_payment.id_user
    this.date_debut =wishlist_payment.date_debut
    this.date_fin =wishlist_payment.date_fin
    this.nom =wishlist_payment.nom
    this.categorie =wishlist_payment.categorie
    this.budget =wishlist_payment.budget
}

Wishlist_payment.create = (newWish, result) => {
    sql.query("INSERT INTO wishlist_payment SET ?", newWish, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Wishlist_payment.getAllByDateCreationAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND date_creation = ?",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getAllByIsDoAndIdUser = (id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND is_do = 1",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getAllByDateIsDoAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND date_is_do = 1",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getAllByIdUser = (id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ?",
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

Wishlist_payment.getAllDateIsDoByBetterThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND date_is_do >= date",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getAllDateIsDoByLessThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND date_is_do <= date",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getAllDateCreationByBetterThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND date_creation >= date",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getAllDateCreationByLessThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id_user = ? AND date_creation <= date",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getById = (id, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE id = ?",
    id,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getByHashWish = (hash, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE hash_wish = ?",
    hash,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.getByHashPayment = (hash, result) => {
    sql.query("SELECT * FROM wishlist_payment WHERE hash_payment = ?",
    hash,
    date,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Wishlist_payment.update = (id,wishlist_payment, result) => {
    sql.query("UPDATE `wishlist_payment` SET `id_user`=?,`hash_wish`=?,`hash_payment`=?,`is_do`=?,`date_is_do`=?,`date_creation`=? WHERE id = ?",
        [wishlist_payment.id_user, wishlist_payment.hash_wish, wishlist_payment.hash_payment, wishlist_payment.is_do, wishlist_payment.date_is_do, wishlist_payment.date_creation, id],
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

Wishlist_payment.remove = (id, result) => {
    sql.query("DELETE FROM wishlist_payment WHERE id =?", id, (err, res) => {
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

module.exports = Wishlist_payment;