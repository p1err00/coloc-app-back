const sql = require("./db.js");

// constructor
const Recurent_Tache = function(recurent_tache) {
  this.id = recurent_tache.id,
  this.nom = recurent_tache.nom,
  this.id_coloc = recurent_tache.id_coloc
};

Recurent_Tache.create = (newRecurent_tache, result) => {
  sql.query("INSERT INTO recurent_tache SET ?", newRecurent_tache, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created course: ", { id: res.insertId, ...newRecurent_tache });
    result(null, { id: res.insertId, ...newCourse });
  });
};

Recurent_Tache.findById = (recuren_tache, result) => {
  sql.query(`SELECT * FROM recurent_tache WHERE id = ${recuren_tache}`, (err, res) => {
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

Recurent_Tache.getAll = (coloc_id, result) => {
  sql.query("SELECT * FROM recurent_tache WHERE id_coloc = ?",
  coloc_id,
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("course: ", res);
    result(null, res);
  });
};

Recurent_Tache.updateById = (id, recurent_tache, result) => {
  sql.query(
    "UPDATE `recurent_tache` SET `nom`=?, id_coloc = ? WHERE id = ?",
    [recurent_tache.nom, recurent_tache.id_coloc, id],
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

      console.log("updated course: ", { id: id, ...recurent_tache });
      result(null, { id: id, ...course });
    }
  );
};

Recurent_Tache.remove = (id, result) => {
  sql.query("DELETE FROM `recurent_tache` WHERE id = ?", id, (err, res) => {
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

Recurent_Tache.removeAll = result => {
  sql.query("DELETE FROM recurent_tache", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} courses`);
    result(null, res);
  });
};

module.exports = Recurent_Tache;
