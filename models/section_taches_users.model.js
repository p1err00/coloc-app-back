const sql = require("./db.js");

const Section_taches_users = function (section_taches_users) {
    this.id = section_taches_users.id
    this.hash_tache = section_taches_users.hash_tache
    this.id_user = section_taches_users.id_user
    this.hash_section = section_taches_users.hash_section
    this.is_do = section_taches_users.is_do
    this.date_end = section_taches_users.date_end
    this.date_start = section_taches_users.date_start
}

Section_taches_users.create = (newSection_taches_users, result) => {
    sql.query("INSERT INTO section_taches_users SET ?", newSection_taches_users, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Section_taches_users.getAllByIdUser = (id_user, result) => {
    sql.query("SELECT * FROM section_taches_users WHERE id_user = ?",
        id_user,
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}

Section_taches_users.getAllByHash = (hash, result) => {
    sql.query(`SELECT * FROM section_taches_users WHERE hash_section = ${hash}`, (err, res) => {
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

Section_taches_users.getAllByIdSection = (id_section, id, result) => {
    sql.query(`SELECT * FROM section_taches_users WHERE id_section = ${id_section} `, (err, res) => {
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
}

Section_taches_users.getAllByIsDoAndIdUser = (id_user, result) => {
    sql.query(`SELECT * FROM section_taches_users WHERE id_user = ${id_user}`, (err, res) => {
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
}

Section_taches_users.getAllByDateStartAndIdUser = (date, id_user, result) => {
    sql.query(`SELECT * FROM section_taches_users WHERE id_user = ${id_user} AND date_start = ${date}`, (err, res) => {
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
}

Section_taches_users.getAllByDateEndAndIdUser = (date, id_user, result) => {
    sql.query(`SELECT * FROM section_taches_users WHERE id_user = ${id_user} AND date_end = ${date}`, (err, res) => {
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
}

Section_taches_users.update = (id, section_taches_users, result) => {
    sql.query("UPDATE `section_taches_users` SET `hash_tache`=?,`nom`=?,`description`=?,`date_start`=?,`date_end`=?,`is_do`=?,`categorie`=?,`is_multiple_tache`=?,`id_section`=? WHERE id = ?",
        [section_taches_users.hash_tache, section_taches_users.nom, section_taches_users.description, section_taches_users.date_start, section_taches_users.date_end, section_taches_users.is_do, section_taches_users.categorie, section_taches_users.is_multiple_tache, section_taches_users.id_section, id],
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

Section_taches_users.remove = (id, result) => {
    sql.query("DELETE FROM section_taches_users WHERE id =?", id, (err, res) => {
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

module.exports = Section_taches_users;