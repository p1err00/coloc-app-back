module.exports = app => {
    const recurent_tache = require("../controllers/recurent_tache.controller.js");

    app.post("/recurent_tache", recurent_tache.create);

    app.get("/recurent_tache/:colocID", recurent_tache.getAll);

    app.put("/recurent_tache/:recurent_tacheID", recurent_tache.update);

    app.delete("/recurent_tache/:recurent_tacheID", recurent_tache.delete);
}