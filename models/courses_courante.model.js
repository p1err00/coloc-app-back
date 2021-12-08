const sql = require("./db.js");
const mysql = require('mysql');

// constructor
const CourseCourante = function(courseCourante) {
  this.id = courseCourante.id,
  this.nom_cur_cou = courseCourante.nom_cur_cou,
  this.nb_buy_cur_cou = courseCourante.nb_buy_cur_cou,
  this.last_buy_cur_cou = courseCourante.last_buy_cur_cou,
  this.prix_cur_cou = courseCourante.prix_cur_cou,
  this.id_coloc = courseCourante.id_coloc
};

CourseCourante.create = (newCourse, result) => {
  sql.query("INSERT INTO courses_current SET ?", newCourse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created course: ", { id: res.insertId, ...newCourse });
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
      console.log("found course: ", res[0]);
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

    console.log("course: ", res);
    result(null, res);
  });
};

CourseCourante.updateById = (id, course, result) => {
  sql.query(
    "UPDATE `courses_current` SET `nom_cur_cou`=?,`nb_buy_cur_cou`=?,`last_buy_cur_cou`=?, prix_cur_cou = ? WHERE nom_cur_cou = ?",
    [course.nom_cur_cou, course.nb_buy_cur_cou, course.last_buy_cur_cou, course.prix_cur_cou, id],
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

      console.log("updated course: ", { id: id, ...course });
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

    console.log("deleted course with id: ", id);

  });
};

CourseCourante.removeAll = result => {
  sql.query("DELETE FROM courses_current", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} courses`);
    result(null, res);
  });
};

module.exports = CourseCourante;
