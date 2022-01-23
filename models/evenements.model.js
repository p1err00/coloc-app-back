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
  
      result(null, { id: res.insertId, ...newEvent });
    });
  };
  
  Evenements.findById = (newEvent, result) => {
    sql.query(`SELECT * FROM evenements WHERE id_coloc = ${newEvent}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
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
  
  Evenements.getAll = result => {
    sql.query("SELECT * FROM evenements", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
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
  
        result(result, { id_e: event.id_e, ...event });
      });
  };
  
  Evenements.remove = (result) => {
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
  
    });
  };
  
  Evenements.removeAll = result => {
    sql.query("DELETE FROM evenements", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  };
  
  module.exports = Evenements;