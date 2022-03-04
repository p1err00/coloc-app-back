const sql = require("./db.js");

const Section_events_item = function (section_event_item) {
    this.id = section_event_item.id,
        this.hash_event = section_event_item.hash_event,
        this.nom = section_event_item.nom,
        this.description = section_event_item.description,
        this.date_start = section_event_item.date_start,
        this.date_end = section_event_item.date_end,
        this.is_do = section_event_item.is_do,
        this.categorie = section_event_item.categorie,
        this.is_multiple_event = section_event_item.is_multiple_event,
        this.have_external_user = section_event_item.have_external_user,
        this.id_coloc = section_event_item.id_coloc

}

Section_events_item.create = (newSection, result) => {
    sql.query("INSERT INTO section_event_item SET ?", newSection, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Section_events_item.getAllByIsDoAndIdColoc = (id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND is_do = 1",
        id_coloc,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByCategorieAndIdColoc = (categorie, id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND categorie = ?",
        [id_coloc, categorie],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByIsMultpipleEvent = (id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND is_multiple_event = 1",
        id_coloc,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByDateStartAndIdColoc = (date, id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND date_start = ?",
        [id_coloc, date],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByDateEndAndIdColoc = (date, id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND date_end = ?",
        [id_coloc, date],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByIdColoc = (id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ?",
        id_coloc,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByHaveExternalUser = (id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND have_external_user = 1",
        id_coloc,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getAllByEndDateAndIdUser = (date, id_coloc, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id_coloc = ? AND date_end = ?",
        [id_coloc, date],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getById = (id, result) => {
    sql.query("SELECT * FROM section_event_item WHERE id = ?",
        id,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getByHash = (hash, result) => {
    sql.query("SELECT * FROM section_event_item WHERE hash_event = ?",
        hash,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.getByNom = (nom, result) => {
    sql.query("SELECT * FROM section_event_item WHERE nom = ?",
        nom,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            console.log("section_event_item : ", res);
            result(null, res);
        });
}

Section_events_item.update = (id, section_event_item, result) => {
    sql.query("UPDATE section_event_item SET hash_event = ?, nom = ?, description = ?, date_start = ?, date_end = ?, is_do = ?, categorie = ?, is_multiple_event = ?, have_external_user = ?, id_coloc = ? WHERE id = ?",
        [section_event_item.hash_event, section_event_item.nom, section_event_item.description, section_event_item.date_start, section_event_item.date_end, section_event_item.is_do, section_event_item.categorie, section_event_item.is_multiple_event, section_event_item.have_external_user, section_event_item.id_coloc, id],
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

Section_events_item.remove = (id, result) => {
    sql.query("DELETE FROM section_event_item WHERE id = ?", id, (err, res) => {
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

module.exports = Section_events_item;