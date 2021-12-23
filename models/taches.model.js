const sql = require("./db.js");
const mysql = require('mysql');

//constructor 
const Taches = function(taches){
    this.id_t = taches.id_t,
    this.nom_t = taches.nom_t,
    this.date_exec_t = taches.date_exec_t,
    this.date_fin_t = taches.date_fin_t,
    this.desc_t = taches.desc_t,
    this.done_t = taches.done_t,
    this.personne_t = taches.personne_t,
    this.nb_select_t = taches.nb_select_t,
    this.id_coloc = taches.id_coloc
}

Taches.create = (newTache, result) => {
  console.log(newTache);
    sql.query("INSERT INTO taches SET ?", newTache, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      result(null, { id: res.insertId, ...newTache });
    });
  };
  
  Taches.findById = (newTache, result) => {
    sql.query(`SELECT * FROM taches WHERE id = ${newTache}`, (err, res) => {
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
  
  Taches.getAll = result => {
    sql.query("SELECT * FROM taches", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  }

  Taches.findByUser = (id, result) => {
    sql.query(`SELECT * FROM taches WHERE personne_t = '${id}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found stock: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  }
  
  Taches.updateById = (id, tache, result) => {
    sql.query(
      "UPDATE `taches` SET `nom_t`=?,`date_exec_t`=?,`date_fin_t`=?,`desc_t`=?,`done_t`=?,`personne_t`=?,`nb_select_t`=? WHERE id_t = ?",
      [tache.nom_t, tache.date_exec_t, tache.date_fin_t, tache.desc_t, tache.done_t, tache.personne_t, tache.nb_select_t, id],
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
  
        console.log("updated stock: ", { id_t: tache.id_t, ...tache });
        result(result, { id_t: tache.id_t, ...tache });
      });
  };
  
  Taches.remove = (resulte) => {
    console.log(resulte);
    sql.query("DELETE FROM `taches` WHERE id_t = ?", resulte.tachesID, (err, res) => {
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
  
  Taches.removeAll = result => {
    sql.query("DELETE FROM wishlist", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} courses`);
      result(null, res);
    });
  };
  
  module.exports = Taches;