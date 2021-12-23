const sql = require("./db.js");

const Message = function (message) {
        this.id_message = message.id_message,
        this.date_envoi = message.date_envoi,
        this.id_channel = message.id_channel,
        this.file = message.file,
        this.id_message = message.id_message,
        this.id_user_send = message.id_user_send,
        this.message = message.message,
        this.seen = message.seen
}

Message.create = (newmessage, result) => {
    sql.query("INSERT INTO message SET ?", newmessage, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Message.getAll = (id_channel, result) => {
    sql.query("SELECT * FROM message WHERE id_channel = ?", 
    id_channel,
    (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        console.log("message : ", res);
        result(null, res);
    });
}

Message.update = (id, message, result) => {
    sql.query("UPDATE message SET nom_cha = ?, valeur_cha = ?, select_cha = ? WHERE nom_cha = ?",
        [message.nom_cha, message.valeur_cha, message.select_cha, id],
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

Message.remove = (id, result) => {
    sql.query("DELETE FROM message WHERE id_message =?", id, (err, res) => {
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

module.exports = Message;