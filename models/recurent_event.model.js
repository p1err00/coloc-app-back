const sql = require("./db.js");

// constructor
const Recurent_Event = function(recurent_event) {
  this.id = recurent_event.id,
  this.nom = recurent_event.nom,
  this.id_coloc = recurent_event.id_coloc
};

Recurent_Event.create = (newRecurent_event, result) => {
  sql.query("INSERT INTO recurent_evenement SET ?", newRecurent_event, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

  });
};

Recurent_Event.findById = (recuren_event, result) => {
  sql.query(`SELECT * FROM recurent_evenement WHERE id = ${recuren_event}`, (err, res) => {
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

Recurent_Event.getAll = (coloc_id, result) => {
  sql.query("SELECT * FROM recurent_evenement WHERE id_coloc = ?",
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

Recurent_Event.updateById = (id, recurent_event, result) => {
  sql.query(
    "UPDATE `recurent_evenement` SET `nom`=?, id_coloc = ? WHERE id = ?",
    [recurent_event.nom, recurent_event.id_coloc, id],
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

      console.log("updated course: ", { id: id, ...recurent_event });
      result(null, { id: id, ...recurent_event });
    }
  );
};

Recurent_Event.remove = (id, result) => {
  sql.query("DELETE FROM `recurent_evenement` WHERE id = ?", id, (err, res) => {
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

Recurent_Event.removeAll = result => {
  sql.query("DELETE FROM recurent_event", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} courses`);
    result(null, res);
  });
};

module.exports = Recurent_Event
