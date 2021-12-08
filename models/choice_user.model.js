const sql = require("./db.js");

const Choice_user = function (choice_user) {
    this.id_choice = choice_user.id_choice,
    this.id_user = choice_user.id_user,
    this.has_voted = choice_user.has_voted
}

Choice_user.create = (newChoice, result) => {
    sql.query("INSERT INTO choice_user SET ?", newChoice, (err, res) => {
        if (err) {
            return console.log("erreur :", err);
        }
    });
}

Choice_user.getAll = (id, result) => {
    sql.query("SELECT * FROM choice_user WHERE id_choice = ?",
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

Choice_user.findById = (id_choice, result) => {
    sql.query(`SELECT * FROM choice_user WHERE id_choice = ${id_choice}`, (err, res) => {
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
  };

  Choice_user.update = (id, choice, result) => {
    sql.query("UPDATE `choice_user` SET `id_choice`=?,`id_user`=?,`has_voted`=? WHERE id_choice = ?",
        [choice.id_choice, choice.id_user, choice.has_voted, id],
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

Choice_user.remove = (id, result) => {
    sql.query("DELETE FROM choice_user WHERE id_choice =?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
    });
}

module.exports = Choice_user;