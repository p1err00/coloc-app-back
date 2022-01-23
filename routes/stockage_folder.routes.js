module.exports = app => {
    const stockage_folder = require("../controllers/stockage_folder.controller.js");

    app.post("/stockage_folder", stockage_folder.create);

    app.get("/stockage_folders/:userID", stockage_folder.getAll);

    app.put("/stockage_folder/:stockageFolderID", stockage_folder.update);

    app.delete("/stockage_folder/:stockageFolderID", stockage_folder.delete);
}