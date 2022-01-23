const sql = require("./db.js");

//constructor 
const Stockage_folder = function(stockage_folder){
    this.id_stockage_folder = stockage_folder.id_stockage_folder,
    this.id_user = stockage_folder.id_user,
    this.id_stockage = stockage_folder.id_stockage,
    this.nom = stockage_folder.nom,
    this.path = stockage_folder.path,
    this.is_shared = stockage_folder.is_shared
    this.id_shared = stockage_folder.id_shared
}

Stockage_folder.create = (stockage_folder, result) => {
    sql.query("INSERT INTO stockage_folder SET ?", stockage_folder, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      result(null, { id: res.insertId, ...stockage_folder });
    });
  };

  Stockage_folder.findByUser = (id, result) => {
    sql.query(`SELECT * FROM stockage_folder WHERE id_user = '${id}'`, (err, res) => {
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
  
  Stockage_folder.findById = (stockage_folder, result) => {
    sql.query(`SELECT * FROM stockage_folder WHERE id_stockage_folder = ${stockage_folder}`, (err, res) => {
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
  
  Stockage_folder.getAll = (id, result) => {
    sql.query("SELECT * FROM stockage_folder WHERE id_user = ?",
    id, 
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log('azeaeazeaze');
      result(null, res);
    });
  }
  
  Stockage_folder.update = (id, stockage_folder, result) => {
    sql.query(
      "UPDATE `stockage_folder` SET `nom`=?,`path`=?,`is_shared`=?,`id_shared`=? WHERE id_stockage_folder = ?",
      [stockage_folder.nom, stockage_folder.path, stockage_folder.is_shared, stockage_folder.id_shared, id],
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
        result(result, { id_t: stockage_folder.id_stockage_folder, ...stockage_folder });
      });
  };
  
  Stockage_folder.remove = (id, resulte) => {
    console.log(resulte);
    sql.query("DELETE FROM `stockage_folder` WHERE id_stockage_folder = ?", id, (err, res) => {
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
  
  module.exports = Stockage_folder;