const sql = require("./db.js");

//constructor 
const File = function(file){
    this.id_file = file.id_file
    this.id_stockage_folder = file.id_stockage_folder
    this.nom = file.nom
    this.extension = file.extension
    this.path = file.path
    this.id_user = file.id_user
    this.public = file.public
    this.is_shared = file.is_shared
    this.id_shared = file.id_shared
}

File.create = (newFile, result) => {
  console.log(newFile);
    sql.query("INSERT INTO file SET ?", newFile, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      result(null, { id: res.insertId, ...newFile });
    });
  };

  File.findByUser = (id, result) => {
    sql.query(`SELECT * FROM file WHERE id_user = '${id}'`, (err, res) => {
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
  
  File.findById = (newFile, result) => {
    sql.query(`SELECT * FROM file WHERE id_file = ${newFile}`, (err, res) => {
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
  
  File.getAll = (id, id_stockage, result) => {
    sql.query("SELECT * FROM file WHERE id_user = ? AND id_stockage_folder = ?",
    [id, id_stockage],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  }
  
  File.update = (id, file, result) => {
    sql.query(
      "UPDATE `file` SET `nom`= ?,`extension`= ?,`public`= ?,`is_shared`= ?, `id_shared`= ? WHERE id_file = ?",
      [file.nom, file.extension, file.public, file.is_shared, file.id_shared, id],
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

        result(result, { id_t: file.id_t, ...file });
      });
  };
  
  File.remove = (id, resulte) => {
    console.log(resulte);
    sql.query("DELETE FROM `file` WHERE id_file = ?",id,
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
  
  module.exports = File;