const sql = require("./db.js");

const Section_taches = function (section_taches) {
  this.id = section_taches.id
  this.id_coloc = section_taches.id_coloc
  this.hash_section = section_taches.hash_section
  this.nom = section_taches.nom
  this.nb_taches = section_taches.nb_taches
}

Section_taches.create = (newSection_taches, result) => {
  sql.query("INSERT INTO section_taches SET ?", newSection_taches, (err, res) => {
    if (err) {
      console.log("erreur :", err);
      return;
    }
  });
}

Section_taches.getAllByIdUser = (id, result) => {
  sql.query("select * from section_taches where hash_section in (select hash_section from section_taches_users u where u.id_user = ?)",
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

Section_taches.getAllByHash = (id, result) => {
  sql.query("select * from section_taches where hash_section = ? ORDER BY nom",
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

Section_taches.getById = (id, result) => {
  sql.query(`SELECT * FROM section_taches WHERE id = ${id}`, (err, res) => {
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

Section_taches.getAllByCategories = (id_coloc, categorie, result) => {
  sql.query(`SELECT * FROM section_taches WHERE id_coloc = ${id_coloc} AND categorie = ${categorie}`, (err, res) => {
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

Section_taches.update = (id, section_taches, result) => {
  sql.query("UPDATE `section_taches` SET `id_coloc`=?,`hash_section`=?,`nom`=?,`nb_taches`=? WHERE id = ?",
    [section_taches.id_coloc, section_taches.hash_section, section_taches.nom, section_taches.nb_taches, id],
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

Section_taches.remove = (id, result) => {
  sql.query("DELETE FROM section_taches WHERE id =?", id, (err, res) => {
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

module.exports = Section_taches;