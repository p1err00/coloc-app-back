const sql = require("./db.js");

const Charge = function (charge) {
    this.id_cha = charge.id_cha,
    this.nom_cha = charge.nom_cha,
    this.valeur_cha = charge.valeur_cha,
    this.select_cha = charge.select_cha,
    this.id_user = charge.id_user
}

Charge.create = (newCharge, result) => {
    sql.query("INSERT INTO charges SET ?", newCharge, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
        console.log("Created categorie :", { id: res.index_cha, ...newCharge });
    });
}

Charge.getAll = (id, result) => {
    sql.query("SELECT * FROM charges WHERE id_user = ?",
    id,
     (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        console.log("Categorie : ", res);
        result(null, res);
    });
}

Charge.findById = (id_user, id_charge, result) => {
    sql.query(`SELECT * FROM charges WHERE id_user = ${id_user} AND id_cha = ${id_charge}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found stock: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

Charge.update = (id, charge, result) => {
    sql.query("UPDATE charges SET nom_cha = ?, valeur_cha = ?, select_cha = ? WHERE nom_cha = ?",
        [charge.nom_cha, charge.valeur_cha, charge.select_cha, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
            console.log("Updating :", {id_cha: result.id_cha, ...result});
        })
}

Charge.remove = result => {
    sql.query("DELETE FROM charges WHERE id_cha =?", result.chargesID, (err, res) => {
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
    });
}

module.exports = Charge;