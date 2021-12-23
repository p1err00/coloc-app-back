const sql = require("./db.js");

const Channel_user = function (channel_user) {
    this.id_channel = channel_user.id_channel;
    this.id_user = channel_user.id_user;
    this.id_coloc = channel_user.id_coloc;
    this.nom = channel_user.nom;
    this.deleteChannel = channel_user.deleteChannel;
    this.last_message = channel_user.last_message
}

Channel_user.create = (newchannel_user, result) => {
    sql.query("INSERT INTO channel_user SET ?", newchannel_user, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
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
        result(null, res);
    });
}

Channel_user.getById = (id_channel, result) => {
    sql.query(`SELECT * FROM channel_user WHERE id_channel = '${id_channel}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
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
  };

Channel_user.update = (id, result) => {
    sql.query("UPDATE channel_user SET id_user = ?, id_coloc = ?, nom = ?, deleteChannel = ?, last_message = ? WHERE id_channel = ?",
        [channel_user.id_user, channel_user.id_coloc, channel_user.nom, channel_user.deleteChannel, channel_user.last_message, id],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
        })
}

Channel_user.updateById = (id, id_user, channel_user, result) => {
    sql.query("UPDATE channel_user SET id_user = ?, id_coloc = ?, nom = ?, deleteChannel = ?, last_message = ? WHERE id_channel = ? AND id_user = ?",
        [id_user, channel_user.id_coloc, channel_user.nom, channel_user.deleteChannel, channel_user.last_message, id, id_user],
        (err, res) => {
            if (err) {
                console.log("erreur :", err);
                return;
            }
            if (res.affectedRows == 0) {
                return;
            }
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
      
          result(null, res);
    });
}

module.exports = Channel_user;