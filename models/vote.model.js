const sql = require("./db.js");

const Vote = function (vote) {
    this.id_vote = vote.id_vote,
    this.nom = vote.nom,
    this.instigator = vote.instigator,
    this.date_creation = vote.date_creation,
    this.is_anonyme = vote.is_anonyme,
    this.nb_response = vote.nb_response,
    this.id_coloc = vote.id_coloc,
    this.timer = vote.timer
}

Vote.create = (newVote, result) => {
    sql.query("INSERT INTO vote SET ?", newVote, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Vote.getAll = (id, result) => {
    sql.query("SELECT * FROM vote WHERE id_coloc = ?",
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

Vote.findById = (id_vote, result) => {
    sql.query(`SELECT * FROM vote WHERE id_vote = ${id_vote}`, (err, res) => {
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

Vote.update = (id, vote, result) => {
    sql.query("UPDATE `vote` SET `nom`=?,`instigator`=?,`date_creation`=?,`is_anonyme`=?,`nb_response`=?,`id_coloc`=?, timer = ? WHERE id_vote = ?",
        [vote.nom, vote.instigator, vote.date_creation,vote.is_anonyme, vote.nb_response, vote.id_coloc, vote.timer,  id],
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

Vote.remove = (id, result) => {
    sql.query("DELETE FROM vote WHERE id_vote =?", id, (err, res) => {
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
      
    });
}

module.exports = Vote;