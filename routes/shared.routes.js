module.exports = app => {
    const shared = require("../controllers/shared.controller.js");

    app.post("/shared", shared.create);

    app.get("/shared/:userID", shared.getAll);

    app.put("/shared/:sharedID", shared.update);

    app.delete("/shared/:sharedID", shared.delete);
}