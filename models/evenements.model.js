const sql = require("./db.js");
const mysql = require('mysql');

//constructor 
const Evenements = function(evenements){
    this.id_e = evenements.id_e,
    this.nom_e = evenements.nom_e,
    this.date_exec_e = evenements.date_exec_e,
    this.date_fin_e = evenements.date_fin_e,
    this.desc_e = evenements.desc_e,
    this.done_e = evenements.done_e,
    this.id_coloc = evenements.id_coloc
}

Evenements.create = (newEvent, result) => {
    sql.query("INSERT INTO evenements SET ?", newEvent, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created wishlist: ", { id: res.insertId, ...newEvent });
      result(null, { id: res.insertId, ...newEvent });
    });
  };
  
  Evenements.findById = (newEvent, result) => {
    sql.query(`SELECT * FROM evenements WHERE id = ${newEvent}`, (err, res) => {
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
  
  Evenements.getAll = result => {
    sql.query("SELECT * FROM evenements", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("stock: ", res);
      result(null, res);
    });
  }
  
  Evenements.updateById = (id, event, result) => {
    sql.query(
      "UPDATE `evenements` SET `nom_e`=?,`date_exec_e`=?,`date_fin_e`=?,`desc_e`=?,`done_e`=? WHERE id_e = ?",
      [event.nom_t, event.date_exec_t, event.date_fin_t, event.desc_t, event.done_t, id],
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
  
        console.log("updated stock: ", { id_e: event.id_e, ...event });
        result(result, { id_e: event.id_e, ...event });
      });
  };
  
  Evenements.remove = (result) => {
    console.log(result);
    sql.query("DELETE FROM `evenements` WHERE id_e = ?", result.eventID, (err, res) => {
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
  
  Evenements.removeAll = result => {
    sql.query("DELETE FROM evenements", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} evenement`);
      result(null, res);
    });
  };
  
  module.exports = Evenements;