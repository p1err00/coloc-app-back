const sql = require("./db.js");

const Notification = function (notification) {
        this.id_notif = notification.id_notif,
        this.nom_notif = notification.nom_notif,
        this.desc_notif = notification.desc_notif,
        this.date_creation_notif = notification.date_creation_notif,
        this.is_read = notification.is_read,
        this.id_coloc = notification.id_coloc,
        this.id_user_send = notification.id_user_send,
        this.id_user_receive = notification.id_user_receive
}

Notification.create = (newNotif, result) => {
    sql.query("INSERT INTO notification SET ?", newNotif, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Notification.getAll = result => {
    sql.query("SELECT * FROM notification", (err, res) => {
        if (err) {
            console.log("erreur :", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Notification.findById = (newNotif, result) => {
    sql.query(`SELECT * FROM notification WHERE id_user_receive = ${newNotif}`, (err, res) => {
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

Notification.update = (id, notification, result) => {
    sql.query("UPDATE notification SET nom_notif = ?, desc_notif = ?, date_creation_notif = ?, is_read = ?, id_coloc = ?, id_user_send = ?, id_user_receive = ? WHERE id_notif = ?",
        [notification.nom_notif, notification.desc_notif, notification.date_creation_notif, notification.is_read, notification.id_coloc, notification.id_user_send, notification.id_user_receive, id],
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

Notification.remove = (result) => {
    sql.query("DELETE FROM notification WHERE id_notif =?", result.notificationID, (err, res) => {
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

module.exports = Notification;