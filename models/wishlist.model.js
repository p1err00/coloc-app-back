const sql = require("./db.js");
const mysql = require('mysql');

//constructor 
const Wishlist = function(wishlist){
    this.id_w = wishlist.id_w
    this.nom_w = wishlist.nom_w,
    this.prix_w = wishlist.prix_w,
    this.url_w = wishlist.url_w,
    this.desc_w = wishlist.desc_w,
    this.id_user = wishlist.id_user
}

Wishlist.create = (newWish, result) => {
    sql.query("INSERT INTO wishlist SET ?", newWish, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created wishlist: ", { id: res.insertId, ...newWish });
      result(null, { id: res.insertId, ...newWish });
    });
  };
  
  Wishlist.findById = (newWish, result) => {
    sql.query(`SELECT * FROM wishlist WHERE id = ${newWish}`, (err, res) => {
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
  
  Wishlist.getAll = result => {
    sql.query("SELECT * FROM wishlist", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("stock: ", res);
      result(null, res);
    });
  }
  
  Wishlist.updateById = (id, wishlist, result) => {
    sql.query(
      "UPDATE wishlist SET nom_w = ?, prix_w = ?, url_w = ?, desc_w = ? WHERE id_w = ?",
      [wishlist.nom_w, wishlist.prix_w, wishlist.url_w, wishlist.desc_w, id],
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
  
        console.log("updated stock: ", { id_w: wishlist.id_w, ...wishlist });
        result(result, { id_w: wishlist.id_w, ...wishlist });
      });
  };
  
  Wishlist.remove = (result) => {
    console.log(result);
    sql.query("DELETE FROM `wishlist` WHERE id_w = ?", result.wishID, (err, res) => {
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
  
  Wishlist.removeAll = result => {
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
  
  module.exports = Wishlist;