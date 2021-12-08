const sql = require("./db.js");

const Colocation = function (colocation) {
    this.id_coloc = colocation.id_coloc,
    this.nom_coloc = colocation.nom_coloc,
    this.nb_personnes_coloc = colocation.nb_personnes_coloc,
    this.date_creation_coloc = colocation.date_creation_coloc,
    this.loyer_coloc = colocation.loyer_coloc,
    this.user_course = colocation.user_course
}

Colocation.create = (newcolocation, result) => {
    sql.query("INSERT INTO colocation SET ?", newcolocation, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
        console.log("Created categorie :", { id: res.index_coloc, ...newcolocation });
    });
}

Colocation.getAll = result => {
    sql.query("SELECT * FROM colocation", (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        console.log("Categorie : ", res);
        result(null, res);
    });
}

Colocation.findById = (newColocation, result) => {
    sql.query(`SELECT * FROM colocation WHERE id_coloc = ${newColocation}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found stock: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

Colocation.update = (id, colocation, result) => {
    sql.query("UPDATE colocation SET nom_coloc = ?, nb_personnes_coloc = ?, date_creation_coloc = ?, loyer_coloc = ?, user_course = ? WHERE id_coloc = ?",
        [colocation.nom_coloc, colocation.nb_personnes_coloc, colocation.date_creation, colocation.loyer_coloc, colocation.user_course, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("Updating :", {id_coloc: id, ...result});
        })
}

Colocation.remove = (result) => {
    sql.query("DELETE FROM colocation WHERE id_coloc =?", result.colocationID, (err, res) => {
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

module.exports = Colocation;