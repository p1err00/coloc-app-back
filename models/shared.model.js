const sql = require("./db.js");

//constructor 
const Shared = function(shared){
    this.id_shared = shared.id_shared
    this.id_user = shared.id_user
    this.id_folder = shared.id_folder
    this.extension = shared.extension
}

Shared.create = (newshared, result) => {
  console.log(newshared);
    sql.query("INSERT INTO shared SET ?", newshared, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      result(null, { id: res.insertId, ...newshared });
    });
  };

  Shared.findByUser = (id, result) => {
    sql.query(`SELECT * FROM shared WHERE id_user = '${id}'`, (err, res) => {
      if (err) {
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
  
  Shared.findById = (newshared, result) => {
    sql.query(`SELECT * FROM shared WHERE id_shared = ${newshared}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
  
      if (res.length) {
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Shared.getAll = (id, result) => {
    sql.query("SELECT * FROM shared WHERE id_shared = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  }
  
  Shared.update = (id, shared, result) => {
    sql.query(
      "UPDATE `shared` SET `id_user`=?,`id_folder`=?,`extension`=? WHERE id_shared = ?",
      [shared.id_user, shared.id_folder, shared.extension, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated stock: ", { id_t: shared.id_t, ...shared });
        result(result, { id_t: shared.id_t, ...shared });
      });
  };
  
  Shared.remove = (id, resulte) => {
    console.log(resulte);
    sql.query("DELETE FROM `shared` WHERE id_shared = ?", 
    id, 
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        return;
      }
  
      console.log("deleted stock with id: ", resulte);
    });
  };
  
  module.exports = Shared;