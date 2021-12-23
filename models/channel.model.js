const sql = require("./db.js");

const Channel = function (channel) {
        this.id_channel = channel.id_channel,
        this.nom_channel = channel.nom_channel,
        this.date_creation = channel.date_creation,
        this.id_coloc = channel.id_coloc,
        this.hash = channel.hash
}

Channel.create = (newchannel, result) => {
    sql.query("INSERT INTO channel SET ?", newchannel, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
        return newchannel;
    });
}

Channel.getSend = (id_user, result) => {
    sql.query(`SELECT * FROM channel WHERE id_coloc = ${id_user}`,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Channel.getReceived = (id_user, result) => {
    sql.query("SELECT * FROM channel WHERE id_user_received = ?", 
    id_user,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Channel.update = (id, channel, result) => {
    sql.query("UPDATE `channel` SET `nom_channel`= ?,`date_creation`= ?,`id_user`= ?,`id_coloc`= ? WHERE id_channel = ?",
        [channel.nom_channel, channel.date_creation, channel.id_user, channel.id_coloc,  id],
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

Channel.remove = (result) => {
    sql.query("DELETE FROM channel WHERE id_cha =?", result.channelID, (err, res) => {
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

module.exports = Channel;