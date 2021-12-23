const sql = require("./db.js");
const mysql = require('mysql');

// constructor
const Course = function(course) {
  this.id = course.id,
  this.nom_cou = course.nom_cou,
  this.nb_buy_cou = course.nb_buy_cou,
  this.last_buy_cou = course.last_buy_cou,
  this.prix_cou = course.prix_cou,
  this.id_coloc = course.id_coloc
};

Course.create = (newCourse, result) => {
  sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newCourse });
  });
};

Course.findById = (courseId, result) => {
  sql.query(`SELECT * FROM courses WHERE id = ${courseId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Course.getAll = result => {
  sql.query("SELECT * FROM courses", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Course.updateById = (id, course, result) => {
  sql.query(
    "UPDATE `courses` SET `nom_cou`=?,`nb_buy_cou`=?,`last_buy_cou`=?, prix_cou = ? WHERE nom_cou = ?",
    [course.nom_cou, course.nb_buy_cou, course.last_buy_cou, course.prix_cou, id],
    (err, res) => {
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

      result(null, { id: id, ...course });
    }
  );
};

Course.remove = (id, result) => {
  sql.query("DELETE FROM `courses` WHERE id = ?", id.coursesId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      return;
    }

  });
};

Course.removeAll = result => {
  sql.query("DELETE FROM courses", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Course;
