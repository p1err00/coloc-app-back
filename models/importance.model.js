const sql = require("./db.js");
const mysql = require('mysql');

const Importance = function(importance){
    this.id_i = importance.id_i,
    this.nom_i = importance.nom_i,
    this.index_i = importance.index_i,
    this.id_coloc = importance.id_coloc
};

Importance.create = (newImportance, result) => {
    sql.query("INSERT INTO importance SET ?", newImportance, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }
        console.log("Created importance : ", {id: res.id_i, ...newImportance});
        result(null, {id: res.insertID, ...newImportance});
    });
}

Importance.getAll = result => {
    sql.query("SELECT * FROM importance", (err, res) => {
        if(err) {
            console.log("error : ", err);
            result(null, err);
            return;
        }
        console.log("Importance : ", res);
        result(null, res);
    });
}

Importance.update = (id, stock, result) => {
    sql.query(
        "UPDATE importance SET nom_i = ?, index_i = ? WHERE id_i = ?",
        [result.nom_i, result.index_i, resul.id_i],
        (err, res) => {
            if(err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }

            if(res.affectedRows == 0){
                return;
            }

            console.log("Updated importance : ", {id_i: resul.id_i, ...result});
    });
}

Importance.remove = (result) => {
    sql.query("DELETE FROM importance WHERE id_i = ?", result.importanceID, (err, res) => {
        if (err) {
            console.log("error : ", err);
            return;
        }

        if(res.affectedRows == 0){
            return
        }

        console.log("Deleted importance successfully", result);
    });
}

module.exports = Importance;