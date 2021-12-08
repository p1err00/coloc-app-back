const sql = require("./db.js");

const Channel_user = function (channel_user) {
    this.id_channel = channel_user.id_channel,
    this.id_user = channel_user.id_user,
    this.id_coloc = channel_user.id_coloc,
    this.nom = channel_user.nom
}

Channel_user.create = (newchannel_user, result) => {
    sql.query("INSERT INTO channel_user SET ?", newchannel_user, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
        console.log("Created categorie :", { id: res.index_cha, ...newchannel_user });
    });
}

Channel_user.getAll = (id, result) => {
    sql.query("SELECT * FROM channel_user WHERE id_user = ? ",
    id,
     (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        console.log("Categorie : ", res);
        result(null, res);
    });
}

Channel_user.getById = (id_channel, result) => {
    sql.query(`SELECT * FROM channel_user WHERE id_channel = ${id_channel}`, (err, res) => {
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

Channel_user.update = (id, channel_user, result) => {
    sql.query("UPDATE channel_user SET nom_cha = ?, valeur_cha = ?, select_cha = ? WHERE nom_cha = ?",
        [channel_user.nom_cha, channel_user.valeur_cha, channel_user.select_cha, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
            console.log("Updating :", {id_cha: result.id_cha, ...result});
        })
}

Channel_user.remove = (result) => {
    sql.query("DELETE FROM channel_user WHERE id_cha =?", result.channel_userID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted categories with id: ", result);
          result(null, res);
    });
}

module.exports = Channel_user;