module.exports = app => {
    const colocation = require("../controllers/colocation.controller.js");

    app.post("/colocation", colocation.create);

    app.get("/colocation", colocation.findAll);

    app.get("/colocation/:colocationID", colocation.findOne);

    app.put("/colocation/:colocationID", colocation.update);

    app.delete("/colocation/:colocationID", colocation.delete);
}