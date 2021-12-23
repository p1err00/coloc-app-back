const sql = require("./db.js");
const mysql = require('mysql');

//constructor 
const Site = function(site){
    this.id_s = site.id_s
    this.nom_s = site.nom_s,
    this.url_s = site.url_s,
    this.id_user = site.id_user
}

Site.create = (newSite, result) => {
    sql.query("INSERT INTO sites SET ?", newSite, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      result(null, { id: res.insertId, ...newSite });
    });
  };
  
  Site.findById = (newSite, result) => {
    sql.query(`SELECT * FROM sites WHERE id = ${newSite}`, (err, res) => {
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
  
  Site.getAll = result => {
    sql.query("SELECT * FROM sites", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  }
  
  Site.updateById = (id, site, result) => {
    sql.query(
      "UPDATE sites SET nom_s = ?, url_s = ? WHERE id_s = ?",
      [site.nom_s, site.url_s, id],
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
  
        console.log("updated stock: ", { id_s: site.id_s, ...site });
        result(result, { id_s: site.id_s, ...site });
      });
  };
  
  Site.remove = (result) => {
    console.log(result);
    sql.query("DELETE FROM `sites` WHERE id_s = ?", result.siteID, (err, res) => {
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
  
  Site.removeAll = result => {
    sql.query("DELETE FROM sites", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} courses`);
      result(null, res);
    });
  };
  
  module.exports = Site;