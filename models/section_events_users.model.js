const sql = require("./db.js");

const Section_events_users = function (section_event_users) {
    this.id = section_event_users.id
    this.id_user = section_event_users.id_user
    this.date_start = section_event_users.date_start
    this.date_end = section_event_users.date_end
    this.hash_section = section_event_users.hash_section
    this.hash_event = section_event_users.hash_event
    this.is_do = section_event_users.is_do
}

Section_events_users.create = (newSection, result) => {
    sql.query("INSERT INTO section_event_users SET ?", newSection, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Section_events_users.getAllByIdUser = (id, result) => {
    sql.query("select * from section_event_users where id_user = ?",
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

Section_events_users.getAllByHashSection = (hash, result) => {
    sql.query("select * from section_event_users where hash_section = ?",
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

Section_events_users.getAllByHashEvent = (hash, result) => {
    sql.query("select * from section_event_users where hash_event = ?",
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

Section_events_users.getAllByIsDoAndIdUser = (id, result) => {
    sql.query("select * from section_event_users where id_user = ? AND is_do = 1",
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

Section_events_users.getAlByStartDateAndIdUser = (date, id, result) => {
    sql.query("select * from section_event_users where id_user = ? AND date_start = ?",
        [id, date],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_events_users.getById = (id, result) => {
    sql.query("select * from section_event_users where id = ?",
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

Section_events_users.update = (id, section_event_users, result) => {
    sql.query("UPDATE `section_event_users` SET `id_user`=?,`hash_section`=?,`hash_event`=?,`date_start`=?,`date_end`=?,`is_do`=? WHERE id = ?",
        [section_event_users.id_user, section_event_users.hash_section, section_event_users.hash_event, section_event_users.date_start, section_event_users.date_end, section_event_users.is_do, id],
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

Section_events_users.remove = (id, result) => {
    sql.query("DELETE FROM section_event_users WHERE id =?", id, (err, res) => {
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

module.exports = Section_events_users;