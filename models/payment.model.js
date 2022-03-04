const sql = require("./db.js");

const Payment = function (payment) {
    this.id_user = payment.id_user
    this.montant = payment.montant
    this.date_creation = payment.date_creation
    this.is_payed = payment.is_payed
    this.date_payment = payment.date_payment
    this.link = payment.link
    this.nom = payment.nom
    this.id_section = payment.id_section
    this.type = payment.type
}

Payment.create = (newPayment, result) => {
    sql.query("INSERT INTO payment SET ?", newPayment, (err, res) => {
        if (err) {
            console.log("erreur :", err);
            return;
        }
    });
}

Payment.getAll = (id, result) => {
    sql.query("SELECT * FROM payment WHERE id_user = ?",
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

Payment.getById = (id, result) => {
    sql.query(`SELECT * FROM payment WHERE id = ${id}`, (err, res) => {
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

  Payment.getNotPayed = (id, result) => {
      console.log(id);
    sql.query(`SELECT * FROM payment WHERE id_user = ${id} AND is_payed != 1`, (err, res) => {
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
  }

  Payment.getAlreadyPayed = (id_choice, result) => {
    sql.query(`SELECT * FROM payment WHERE id_user = ${id_choice} AND is_payed != 0`, (err, res) => {
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
  }

  Payment.getByIdSection = (id_section, id_user, result) => {
    sql.query(`SELECT * FROM payment WHERE id_section = ${id_section} AND id_user = ${id_user}`, (err, res) => {
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
  }

  Payment.getByType = (type, id_user, result) => {
    sql.query(`SELECT * FROM payment WHERE type = ${type} AND id_user = ${id_user}`, (err, res) => {
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
  }

  Payment.update = (id, payment, result) => {
    sql.query("UPDATE `payment` SET `id_user`=?,`amount`=?,`date_creation`=?,`is_payed`=?,`date_payment`=?,`link`=?,`nom`=?,`id_section`=?,`type`=? WHERE id = ?",
        [payment.id_user, payment.amount, payment.date_creation, payment.is_payed, payment.date_payment, payment.link, payment.nom, payment.id_section, payment.type, id],
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

Payment.remove = (id, result) => {
    sql.query("DELETE FROM payment WHERE id =?", id, (err, res) => {
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

module.exports = Payment;