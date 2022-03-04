const sql = require("./db.js");

const Abonnement = function (abonnement) {
    this.id_user = abonnement.id_user
    this.amount = abonnement.amount
    this.date_creation = abonnement.date_creation
    this.is_payed = abonnement.is_payed
    this.date_facturation = abonnement.date_facturation
    this.link = abonnement.link
    this.site_name = abonnement.site_name
}

Abonnement.create = (newAbonnement, result) => {
    sql.query("INSERT INTO abonnement SET ?", newAbonnement, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Abonnement.getAll = (id, result) => {
    sql.query("SELECT * FROM abonnement WHERE id_user = ?",
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

Abonnement.getById = (id, result) => {
    sql.query(`SELECT * FROM abonnement WHERE id = ${id}`, (err, res) => {
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

  Abonnement.getNotPayed = (id, result) => {
      console.log(id);
    sql.query(`SELECT * FROM abonnement WHERE id_user = ${id} AND is_payed != 1`, (err, res) => {
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

  Abonnement.getAlreadyPayed = (id_choice, result) => {
    sql.query(`SELECT * FROM abonnement WHERE id_user = ${id_choice} AND is_payed != 0`, (err, res) => {
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

  Abonnement.getMultipleAbonnement = (id_choice, result) => {
    sql.query(`SELECT * FROM choice WHERE id_choice = ${id_choice}`, (err, res) => {
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

  Abonnement.update = (id, abonnement, result) => {
    sql.query("UPDATE `abonnement` SET `id_user`=?,`amount`=?,`date_creation`=?,`is_payed`=?,`date_abonnement`=?,`link`=?,`nom`=?,`is_multiple_abonnement`=?,`multiple_code`=? WHERE id = ?",
        [abonnement.id_user, abonnement.amount, abonnement.date_creation, abonnement.is_payed, abonnement.date_abonnement, abonnement.link, abonnement.nom, abonnement.is_multiple_abonnement, abonnement.multiple_code, id],
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

Abonnement.remove = (id, result) => {
    sql.query("DELETE FROM abonnement WHERE id =?", id, (err, res) => {
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

module.exports = Abonnement;