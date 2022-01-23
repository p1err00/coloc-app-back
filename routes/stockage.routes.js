module.exports = app => {
    const stockage = require("../controllers/stockage.controller.js");

    app.post("/stockage", stockage.create);

    app.get("/stockage/:userID", stockage.getAll);

    app.put("/stockage/:stockageID", stockage.update);

    app.delete("/stockage/:stockageID", stockage.delete);
}