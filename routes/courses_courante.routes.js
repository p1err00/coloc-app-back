module.exports = app =>{
    const coursesCourante = require("../controllers/courses_courante.controller.js");

    app.post("/coursesCourante", coursesCourante.create);

    app.get("/coursesCourante", coursesCourante.findAll);

    app.get("/coursesCourante/:coursesCID", coursesCourante.findOne);

    app.put("/coursesCourante/:coursesCID", coursesCourante.update);

    app.delete("/coursesCourante/:coursesCID", coursesCourante.delete);

    app.delete("/coursesCourante", coursesCourante.deleteAll);
};