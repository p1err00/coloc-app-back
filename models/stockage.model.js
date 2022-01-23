const sql = require("./db.js");

//constructor 
const Stockage = function(stockage){
    this.id_stockage = stockage.id_stockage,
    this.id_user = stockage.id_user,
    this.nb_folder = stockage.nb_folder
}

Stockage.create = (newTache, result) => {
  console.log(newTache);
    sql.query("INSERT INTO stockage SET ?", newTache, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      result(null, { id: res.insertId, ...newTache });
    });
  };

  Stockage.findByUser = (id, result) => {
    sql.query(`SELECT * FROM stockage WHERE id_user = '${id}'`, (err, res) => {
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
  
  Stockage.findById = (newTache, result) => {
    sql.query(`SELECT * FROM stockage WHERE id_stockage = ${newTache}`, (err, res) => {
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
  
  Stockage.getAll = (id, result) => {
    sql.query("SELECT * FROM stockage WHERE id_user = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log('azeazeazezae')
      result(null, res);
    });
  }
  
  Stockage.update = (id, stockage, result) => {
    sql.query(
      "UPDATE `stockage` SET `id_user`=?,`nb_folder`=? WHERE id_stockage = ?",
      [stockage.id_user, stockage.nb_folder, id],
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
  
        console.log("updated stock: ", { id_stockage: stockage.id_stockage, ...stockage });
        result(result, { id_stockage: stockage.id_stockage, ...stockage });
      });
  };
  
  Stockage.remove = (id, resulte) => {
    sql.query("DELETE FROM `stockage` WHERE id_stockage = ?", id, (err, res) => {
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
  
  module.exports = Stockage;