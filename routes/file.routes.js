module.exports = app => {
    const file = require("../controllers/file.controller.js");

    app.post("/file", file.create);

    app.get("/files/:userID/:stockage_folderID", file.getAll);

    app.get("/file/:userID", file.findById);

    app.put("/file/:fileID", file.update);

    app.delete("/file/:fileID", file.delete);
}