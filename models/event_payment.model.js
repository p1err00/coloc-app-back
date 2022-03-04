const sql = require("./db.js");

const Event_payment = function (event_payment) {
    this.hash_event = event_payment.hash_event
    this.hash_payment = event_payment.hash_payment
    this.id_user = event_payment.id_user
    this.is_do = event_payment.is_do
    this.date_is_do = event_payment.date_is_do
    this.date_creation = event_payment.date_creation
}

Event_payment.create = (newEvent, result) => {
    sql.query("INSERT INTO event_payment SET ?", newEvent, (err, res) => {
        if (err) {
            console.log("erreur :", err);
        }
    });
}

Event_payment.getAllByDateCreationAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE date_creation = ? AND id_user = ?",
        [date, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Event_payment.getAllByIsDoAndIdUser = (id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE id_user = ? AND is_do = 1",
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

Event_payment.getAllByDateIsDoAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE date_is_do = ? AND id_user = ?",
        [date, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Event_payment.getAllByIdUser = (id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE id_user = ?",
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

Event_payment.getAllByDateIsDoBetterThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE date_is_do >= ? AND id_user = ?",
        [date, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Event_payment.getAllByDateIsDoLessThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE date_is_do <= ? AND id_user = ?",
        [date, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Event_payment.getAllByDateCreationBetterThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE date_creation >= ? AND id_user = ?",
        [date, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Event_payment.getAllByDateCreationLessThanAndIdUser = (date, id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE date_creation <= ? AND id_user = ?",
        [date, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Event_payment.getById = (id, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE id = ?",
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

Event_payment.getByHashEvent = (hash, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE hash_event = ?",
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

Event_payment.getByHashPayment = (hash, result) => {
    sql.query("SELECT * FROM `event_payment` WHERE hash_payment = ?",
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

Event_payment.update = (id, event_payment, result) => {
    sql.query("UPDATE event_payment SET hash_event = ?, hash_payment = ?, id_user = ?, is_do = ?, date_is_do = ?, date_creation = ? WHERE id = ?",
        [event_payment.hash_event, event_payment.hash_payment, event_payment.id_user, event_payment.is_do, event_payment.date_is_do, event_payment.date_creation, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
        });
}

Event_payment.remove = (id, result) => {
    sql.query("DELETE FROM event_payment WHERE id =?", id, (err, res) => {
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
}

module.exports = Event_payment;