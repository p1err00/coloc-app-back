module.exports = app =>{
    const taches = require("../controllers/taches.controller.js");

    app.post("/taches", taches.create);

    app.get("/taches", taches.findAll);

    app.get("/taches/:tachesID", taches.findOne);

    app.get("/taches/user/:userID", taches.findByUser);

    app.put("/taches/:tachesID", taches.update);

    app.delete("/taches/:tachesID", taches.delete);

    app.delete("/taches", taches.deleteAll);
};