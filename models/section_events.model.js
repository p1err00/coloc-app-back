const sql = require("./db.js");

const Section_events = function (section_events) {
    this.id = section_events.id
    this.id_coloc = section_events.id_coloc
    this.hash_section = section_events.hash_section
    this.nom = section_events.nom
    this.nb_event = section_events.nb_event
}

Section_events.create = (newSection_events, result) => {
    sql.query("INSERT INTO section_events SET ?", newSection_events, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Section_events.getAllByIdColoc = (id, result) => {
    sql.query("SELECT * FROM section_events WHERE id_coloc = ?",
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

Section_events.getAllByHash = (hash, result) => {
    sql.query("SELECT * FROM section_events WHERE hash_section = ?",
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

Section_events.getByNom = (nom, result) => {
    sql.query("SELECT * FROM section_events WHERE nom = ?",
        nom,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_events.update = (id, section_events, result) => {
    sql.query("UPDATE `section_events` SET `id_coloc`=?,`hash_section`=?,`nom`=?,`nb_event`=? WHERE id = ?",
        [section_events.id_coloc, section_events.hash_section, section_events.nom, section_events.nb_event, id],
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

Section_events.remove = (id, result) => {
    sql.query("DELETE FROM section_events WHERE id =?", id, (err, res) => {
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

module.exports = Section_events;