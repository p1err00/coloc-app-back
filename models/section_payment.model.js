const sql = require("./db.js");

const Section_payment = function (section_payment) {
  this.id_user = section_payment.id_user
  this.id_coloc = section_payment.id_coloc
  this.date_debut = section_payment.date_debut
  this.date_fin = section_payment.date_fin
  this.nom = section_payment.nom
  this.categorie = section_payment.categorie
  this.budget = section_payment.budget
  this.hash = section_payment.hash
}

Section_payment.create = (newSection_payment, result) => {
  sql.query("INSERT INTO section_payment SET ?", newSection_payment, (err, res) => {
    if (err) {
      console.log("erreur :", err);
      return;
    }
  });
}

Section_payment.getAll = (id, result) => {
  sql.query("select * from section_payment where hash in (select hash from section_payment_users u where u.id_user = ?)",
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

Section_payment.getById = (id, result) => {
  sql.query(`SELECT * FROM section_payment WHERE id = ${id}`, (err, res) => {
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

Section_payment.getAllSectionByIdColoc = (id_coloc, result) => {
  sql.query(`SELECT * FROM section_payment WHERE id_coloc = ${id_coloc}`, (err, res) => {
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

Section_payment.getAllByCategories = (id_coloc, categorie, result) => {
  sql.query(`SELECT * FROM section_payment WHERE id_coloc = ${id_coloc} AND categorie = ${categorie}`, (err, res) => {
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

Section_payment.update = (id, section_payment, result) => {
  sql.query("UPDATE `section_payment` SET `id_user`=?,`c`=?,`date_debut`=?,`nom`=?,`date_fin`=?,`categorie`=?,`budget`=? WHERE id = ?",
    [section_payment.id_user, section_payment.budget, section_payment.date_debut, section_payment.nom, section_payment.date_fin, section_payment.categorie, section_payment.budget, id],
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

Section_payment.remove = (id, result) => {
  sql.query("DELETE FROM section_payment WHERE id =?", id, (err, res) => {
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

module.exports = Section_payment;