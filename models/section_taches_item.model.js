const sql = require("./db.js");

const Section_taches_item = function (section_taches_item) {
    this.id = section_taches_item.id
    this.hash_tache = section_taches_item.hash_tache
    this.nom = section_taches_item.nom
    this.description = section_taches_item.description
    this.date_start = section_taches_item.date_start
    this.date_end = section_taches_item.date_end
    this.is_do = section_taches_item.is_do
    this.categorie = section_taches_item.categorie
    this.is_multiple_tache = section_taches_item.is_multiple_tache
    this.id_section = section_taches_item.id_section
}

Section_taches_item.create = (newSection_taches_item, result) => {
    sql.query("INSERT INTO section_taches_item SET ?", newSection_taches_item, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Section_taches_item.getAllByIdSection = (id, result) => {
    sql.query("SELECT * FROM section_taches_item WHERE id_section = ?",
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

Section_taches_item.getAllByIsDoAndIdSection = (id, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE id_section = ${id} AND is_do = 1`, (err, res) => {
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

Section_taches_item.getAllByCategorieAndIdSection = (categorie, id, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE id_section = ${id} AND categorie = ${categorie}`, (err, res) => {
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

Section_taches_item.getAllByIsMultipleTacheAndIdSection = (id_coloc, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE id_section = ${id_coloc} AND is_multiple_tache = 1`, (err, res) => {
        if (err) {
            console.log("zearzerzerzerzr: ", err);
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

Section_taches_item.getAllByDateStartAndIdSection = (date, id_section, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE id_section = ${id_section} AND date_start = ${date_start}`, (err, res) => {
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

Section_taches_item.getAllByDateEndAndIdSection = (date, id_section, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE id_section = ${id_section} AND date_end = ${date}`, (err, res) => {
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

Section_taches_item.getById = (id, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE id = ${id}`, (err, res) => {
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

Section_taches_item.getByHash = (hash, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE hash_tache = ${hash}`, (err, res) => {
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

Section_taches_item.getByNom = (nom, result) => {
    sql.query(`SELECT * FROM section_taches_item WHERE nom = ${nom}`, (err, res) => {
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

Section_taches_item.update = (id, section_taches_item, result) => {
    sql.query("UPDATE `section_taches_item` SET `hash_tache`=?,`nom`=?,`description`=?,`date_start`=?,`date_end`=?,`is_do`=?,`categorie`=?,`is_multiple_tache`=?,`id_section`=? WHERE id = ?",
        [section_taches_item.hash_tache, section_taches_item.nom, section_taches_item.description, section_taches_item.date_start, section_taches_item.date_end, section_taches_item.is_do, section_taches_item.categorie, section_taches_item.is_multiple_tache, section_taches_item.id_section, id],
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

Section_taches_item.remove = (id, result) => {
    sql.query("DELETE FROM section_taches_item WHERE id =?", id, (err, res) => {
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

module.exports = Section_taches_item;