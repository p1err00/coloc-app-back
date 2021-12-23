const sql = require("./db.js");
const mysql = require('mysql');

// constructor
const CourseCourante = function(courseCourante) {
  this.id = courseCourante.id,
  this.nom_cur_cou = courseCourante.nom_cur_cou,
  this.nb_buy_cur_cou = courseCourante.nb_buy_cur_cou,
  this.last_buy_cur_cou = courseCourante.last_buy_cur_cou,
  this.prix_cur_cou = courseCourante.prix_cur_cou,
  this.id_coloc = courseCourante.id_coloc,
  this.done = courseCourante.done
};

CourseCourante.create = (newCourse, result) => {
  sql.query("INSERT INTO courses_current SET ?", newCourse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newCourse });
  });
};

CourseCourante.findById = (courseId, result) => {
  sql.query(`SELECT * FROM courses_current WHERE id = ${courseId}`, (err, res) => {
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

CourseCourante.getAll = result => {
  sql.query("SELECT * FROM courses_current", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

CourseCourante.updateById = (id, course, result) => {
  sql.query(
    "UPDATE `courses_current` SET `nom_cur_cou`=?,`nb_buy_cur_cou`=?,`last_buy_cur_cou`=?, prix_cur_cou = ?, done = ? WHERE id  = ?",
    [course.nom_cur_cou, course.nb_buy_cur_cou, course.last_buy_cur_cou, course.prix_cur_cou, course.done, id],
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

CourseCourante.remove = (id, result) => {
  console.log(id);
  sql.query("DELETE FROM `courses_current` WHERE id = ?", id, (err, res) => {
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

CourseCourante.removeAll = result => {
  sql.query("DELETE FROM courses_current", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = CourseCourante;
