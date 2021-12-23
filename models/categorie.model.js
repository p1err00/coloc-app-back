const sql = require("./db.js");

const Categorie = function (categorie) {
    this.id_ca = categorie.id_ca,
    this.nom_ca = categorie.nom_ca,
    this.index_ca = categorie.index_ca,
    this.id_coloc = categorie.id_coloc
}

Categorie.create = (newCategorie, result) => {
    sql.query("INSERT INTO categories SET ?", newCategorie, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Categorie.getAll = result => {
    sql.query("SELECT * FROM categories", (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Categorie.update = (id, categorie, result) => {
    sql.query("UPDATE categories SET nom_ca = ?, index_ca = ? WHERE id_ca = ?",
        [result.nom_ca, result.index_ca, result.id_ca],
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

Categorie.remove = (result) => {
    sql.query("DELETE FROM categories WHERE id_ca =?", result.categorieID, (err, res) => {
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
    });//
}

module.exports = Categorie;