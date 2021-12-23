const sql = require("./db.js");

const Choice = function (choice) {
    this.id_choice = choice.id_choice,
    this.id_vote = choice.id_vote,
    this.nom = choice.nom,
    this.nb_vote = choice.nb_vote
}

Choice.create = (newChoice, result) => {
    sql.query("INSERT INTO choice SET ?", newChoice, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Choice.getAll = (id, result) => {
    sql.query("SELECT * FROM choice WHERE id_vote = ?",
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

Choice.findById = (id_choice, result) => {
    sql.query(`SELECT * FROM choice WHERE id_choice = ${id_choice}`, (err, res) => {
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

  Choice.update = (id, choice, result) => {
    sql.query("UPDATE `choice` SET `id_vote`=?,`nom`=?,`nb_vote`=? WHERE id_choice = ?",
        [choice.id_vote, choice.nom, choice.nb_vote, id],
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

Choice.remove = (id, result) => {
    sql.query("DELETE FROM choice WHERE id_choice =?", id, (err, res) => {
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

module.exports = Choice;