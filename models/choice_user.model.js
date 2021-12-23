const sql = require("./db.js");

const Choice_user = function (choice_user) {
    this.id_choice = choice_user.id_choice,
    this.id_vote = choice_user.id_vote,
    this.id_user = choice_user.id_user,
    this.has_voted = choice_user.has_voted,
    this.nom_choice = choice_user.nom_choice
}

Choice_user.create = (newChoice, result) => {
    sql.query("INSERT INTO choice_user SET ?", newChoice, (err, res) => {
        if (err) {
            return console.log("erreur :", err);
        }
    });
}

Choice_user.getAll = (id, result) => {
    sql.query("SELECT * FROM choice_user WHERE id_user = ?",
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

Choice_user.findById = (id_choice, result) => {
    sql.query(`SELECT * FROM choice_user WHERE id_choice = ${id_choice}`, (err, res) => {
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

  Choice_user.update = (id, choice, result) => {
    sql.query("UPDATE `choice_user` SET `id_choice`=?,`id_user`=?,`has_voted`=?, `nom_choice`=?, `id_vote`=? WHERE id_choice = ?",
        [choice.id_choice, choice.id_user, choice.has_voted, choice.nom_choice, choice.id_vote, id],
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

Choice_user.remove = (id, id_user, result) => {
    sql.query("DELETE FROM choice_user WHERE id_vote =? AND id_user = ?", 
    [id, id_user], 
    (err, res) => {
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