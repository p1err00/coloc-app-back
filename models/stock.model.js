const sql = require("./db.js");
const mysql = require('mysql');

//constructor 
const Stock = function(stock){
    this.id_con = stock.id_con
    this.nom_con = stock.nom_con,
    this.quantite_con = stock.quantite_con,
    this.importance = stock.importance,
    this.categorie = stock.categorie,
    this.date_achat_con = stock.date_achat_con,
    this.date_peremption_con = stock.date_peremption_con,
    this.id_coloc = stock.id_coloc
}

Stock.create = (newStock, result) => {
    sql.query("INSERT INTO stock SET ?", newStock, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created stock: ", { id: res.insertId, ...newStock });
      result(null, { id: res.insertId, ...newStock });
    });
  };
  
  Stock.findById = (newStock, result) => {
    sql.query(`SELECT * FROM stock WHERE id = ${newStock}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found stock: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Stock.getAll = result => {
    sql.query("SELECT * FROM stock", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("stock: ", res);
      result(null, res);
    });
  }
  
  Stock.updateById = (id, stock, result) => {

    sql.query(
      "UPDATE `stock` SET`nom_con`=?,`quantite_con`=?,`importance`=?,`categorie`=?,`date_achat_con`=?,`date_peremption_con`=? WHERE id_con = ?",
      [stock.nom_con, stock.quantite_con, stock.importance, stock.categorie, stock.date_achat_con, stock.date_peremption_con, stock.id_con],
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
  
        console.log("updated stock: ", { id: stock.id_con, ...stock });
        result(result, { id: stock.id_con, ...stock });
      });
  };
  
  Stock.remove = (result) => {
    console.log(result);
    sql.query("DELETE FROM `stock` WHERE id_con = ?", result.stockID, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        return;
      }
  
      console.log("deleted stock with id: ", result);
    });
  };
  
  Stock.removeAll = result => {
    sql.query("DELETE FROM stock", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} courses`);
      result(null, res);
    });
  };
  
  module.exports = Stock;