const sql = require("./db.js");
const mysql = require('mysql');

// constructor
const Extra = function(extra) {
  this.id_ex = extra.id,
  this.nom_ex = extra.nom_ex,
  this.valeur_ex = extra.valeur_ex,
  this.select_ex = extra.select_ex,
  this.id_user = extra.id_user
};

Extra.create = (newExtra, result) => {
  sql.query("INSERT INTO extras SET ?", newExtra, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created extraa: ", { id: res.insertId, ...newExtra });
    result(null, { id: res.insertId, ...newExtra });
  });
};

Extra.findById = (extraID, result) => {
  sql.query(`SELECT * FROM extras WHERE id = ${extraID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found course: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Extra.getAll = result => {
  sql.query("SELECT * FROM extras", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("course: ", res);
    result(null, res);
  });
};

Extra.update = (id, extra, result) => {
  console.log(id);
  console.log(extra);
  sql.query(
    "UPDATE `extras` SET `nom_ex`=?,`valeur_ex`=?,`select_ex`=? WHERE id_ex = ?",
    [extra.nom_ex, extra.valeur_ex, extra.select_ex, id],
    (err, res) => {
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

      console.log("updated extra: ", { id: id, ...extra });
      result(null, { id: id, ...extra });
    }
  );
};

Extra.remove = (id, result) => {
  console.log(id);
  sql.query("DELETE FROM `extras` WHERE id_ex = ?", id.extrasID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      return;
    }

    console.log("deleted course with id: ", id);

  });
};

Extra.removeAll = result => {
  sql.query("DELETE FROM extras", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} courses`);
    result(null, res);
  });
};

module.exports = Extra;
